import React, { useContext, createContext } from 'react';
import {useParams, Link} from 'react-router-dom';
import { useState } from 'react';
import { useEditExperience, useDeleteExperience } from './mutations/experienceMutations';
import { useMutation} from 'react-query';
import { AppContext } from './App';
import CategoryExperienceList from './CategoryExperienceList';
import axios from 'axios';

export const CategoryContext = createContext()
export const CategoryExperienceContext = createContext()

function CategoryShow(){

  //useContext values from App
  const {user, category_query} = useContext(AppContext)

  // Make a request for a user with a given ID
  let { id } = useParams()
  //Find category that matches 
  const current = category_query.filter((category)=> {
    return (
      category.id.toString() === id
    )
  })
  //Set current category
  const currentCategory = current[0]

  return(
    <CategoryContext.Provider value={{currentCategory, user}} >
        <div key={currentCategory.name} className='category-show'>
          <h1 className='category-title'>{currentCategory.name}</h1>
          <p className='category-description'>{currentCategory.description}</p>
          <CategoryActivities/>
          <CategoryExperiences/>
          <CategoryResources />
        </div>
    </CategoryContext.Provider>
  )
}

export default CategoryShow;

const CategoryResources = () => {
  const {currentCategory} = useContext(CategoryContext)

  return(
    <div className='category-resources'>
      <h4 className='resources-title'>Resources:</h4>
      <div className='resource-list'>
        {currentCategory.resources.map((resource)=> {
          return(
            <div key={resource.id} className='resource-list-item'>
              <label className='resource-description'>{resource.description} ➤ </label>
              <Link className='resource-link' to={resource.url}>{resource.url}</Link>
              </div>
            
          )
        })}

      </div>

    </div>
  )
}

const CategoryActivities = () => {
  const {currentCategory} = useContext(CategoryContext)

  return(
    <div className='category-activities'>
          <h4 className='activities-title'>Activities:</h4>
          {currentCategory.activities.map((activity)=> {
            return(
              <li key={activity.id} className='activity-list-item'>{activity.name}</li>
            )
          })}
    </div>

  )
}

const CategoryExperiences = () => {
  const {currentCategory, user} = useContext(CategoryContext)


  //experiences state
  const [experiences, setExperiences] = useState(currentCategory.experiences)

  //error state (only one error applicable, comment can't be blank)
  const [errors, setErrors] = useState(null)

  //toggle states
  const [showConfirm, setShowConfirm] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  //mutations from separate mutations folder
  const {mutate: editExperience} = useEditExperience()
  const {mutate: deleteExperience} = useDeleteExperience()

  //HANDLE FUNCTIONS
  //EDIT
  function handleEdit(e, editComment){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id !== editComment.id)
    })
    updatedExperiences.push(editComment)
    editExperience(editComment)
    setExperiences(updatedExperiences)
  }

  //DELETE
  function handleDelete(e, id){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id !== id)
    })
    deleteExperience(id)
    setExperiences(updatedExperiences)
    setShowConfirm(!showConfirm)
  }

  //add experience mutation function
  const addExperience = useMutation((experience)=> {
    return(
      axios.post('/experiences', experience)
      .then(function (response) {
        //handle success, first setErrors back to null
        setErrors(null)
        //return response data
        return (response.data)
        //no need to catch errors because useQuery onError does that for us
      })
      )
  },
  {
    onSuccess: (data) => {
      //on success, update state value of experiences which will update experiences list
      const experience = [...experiences]
      experience.push(data)
      setExperiences(experience)
    },
    onError:(error)=> {
      //on error, return error message
      setErrors("Comment can't be blank")

      return error
    }
  })
  
  //ADD
  function handleAdd(e, newExperience){
    e.preventDefault()
    setErrors(null)
    const experience = {
      comment: newExperience,
      user_id: user.id,
      category_id: currentCategory.id,
      username: user.username
    }
    //call addMutation useMutation function from above (not from separate file, because I'm also handling state info there)
    addExperience.mutate(experience)
    //hides add experience form
    setShowAddForm(!showAddForm)
  }
  return(
    <CategoryExperienceContext.Provider value={{handleAdd, handleEdit, handleDelete}}>
    <div className='category-experiences'>
      <h4 className='experiences-title'>Experiences:</h4>
      {showAddForm && <AddForm/>}
      <button className='add-button' onClick={() => {
        setErrors(null)
        setShowAddForm(!showAddForm)
        }}>{showAddForm ? 'Close' : 'Add Experience'}</button>
      {errors ? <p className='error-message'>{errors}</p> : ''}
      {experiences.map((experience)=>{
        return(
          <div key={experience.id} className='experience-list-section'>
            <CategoryExperienceList experience={experience}/>
          </div>
        )
      })
      }
    </div>
    </CategoryExperienceContext.Provider>
  )
}

const AddForm= () => {
  const {handleAdd} = useContext(CategoryExperienceContext)
  const [newExperience, setNewExperience] = useState('')
  return(
    <div className='add-form'>
      <form onSubmit={(e)=> handleAdd(e, newExperience)}>
        <input
          type= 'text'
          placeholder='Enter new experience...'
          value={newExperience}
          onChange={(e)=> setNewExperience(e.target.value)}
          className='add-input'
        />
        <button className='submit-add' type='submit'>Submit</button>
      </form>
    </div>
  )
}

