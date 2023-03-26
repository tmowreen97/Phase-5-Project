import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useAddExperience, useEditExperience, useDeleteExperience } from './mutations/experienceMutations';
import { useMutation, mutate, useQueryClient } from 'react-query';
import { AppContext } from './App';
import CategoryExperienceList from './CategoryExperienceList';
import validateData from 'json-server/lib/server/router/validate-data';

function CategoryShow(){

  const {user, category_query} = useContext(AppContext)

  //to handle edit experience PATCH request
  

  let { id } = useParams()
  console.log({id})
  const currentCategory = category_query.filter((category)=> {
    return (
      category.id == id
    )
  })

  return(
    currentCategory.map((category)=> {
      return(
        <div key={category.id} className='category-show'>
          <h1 className='category-title'>{category.name}</h1>
          <p className='category-description'>{category.description}</p>
          <CategoryActivities category={category}/>
          <CategoryExperiences category={category} user={user}/>
        </div>
      )
    })
  )
}

export default CategoryShow;

const CategoryActivities = ({category}) => {
  return(
    <div className='category-activities'>
          <h4 className='activities-title'>Activities:</h4>
          {category.activities.map((activity)=> {
            return(
              <li key={activity.id} className='activity-list-item'>{activity.name}</li>
            )
          })}
    </div>

  )
}

const CategoryExperiences = ({category, user}) => {
  const [showConfirm, setShowConfirm] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [addData, setAddData] = useState([])
  const queryClient = useQueryClient();
  let tryThis = []

  const [experiences, setExperiences] = useState(category.experiences)
  const {mutate: addExperience} = useAddExperience()
  const {mutate: editExperience} = useEditExperience()
  const {mutate: deleteExperience} = useDeleteExperience()

  console.log('experiences,', experiences)
  console.log('category', category)
  console.log('user', user)

  //HANDLE FUNCTIONS
  //EDIT
  function handleEdit(e, editComment){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != editComment.id)
    })
    updatedExperiences.push(editComment)
    console.log('in edit', editComment)
    editExperience(editComment)
    setExperiences(updatedExperiences)
  }



  //DELETE
  function handleDelete(e, id){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != id)
    })
    deleteExperience(id)
    setExperiences(updatedExperiences)
    setShowConfirm(!showConfirm)
  }
  //WORKING ON GETTING ERROR MESSAGES FROM USEMUTATION

  // const addExperience = (experience)=> {
  //   return(
  //     fetch('/experiences', {
  //       method: 'POST',
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(experience)
  //     })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json()
  //       }
  //       console.log(res.status)
  
  //       throw new Error("Error creating experience")
  //     })
  //   )
  // }

  const addMutation = useMutation(async (experience)=> {
    return(
      await fetch('/experiences', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(experience)
      })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        console.log(res.status)

        throw new Error("Error creating experience")
      })
      )
  },
  {
    onSuccess: (data, variables, context) => {
      const experience = [...experiences]
      experience.push(data)
      setExperiences(experience)
    },
    onError:(error, variables)=> {
      console.log('error', error)
      console.log('variables', variables)
    }
  })

  console.log('adddd', addData)
  

  //ADD
  function handleAdd(e, newExperience){
    e.preventDefault()
    const updatedExperiences = [...experiences]
    const experience = {
      comment: newExperience,
      user_id: user.id,
      category_id: category.id,
      username: user.username
    }
    
    updatedExperiences.push(experience)
    //calls useMutation function from experienceMutations file
    // addExperience(experience)
    // mutate({data, error, status}(experience))
    addMutation.mutate(experience)
    console.log('addData', addData)
    console.log('trythis', tryThis)
    console.log('addMutation', addMutation.data)
    //updates state values
    // setExperiences(updatedExperiences)
    console.log('error',addExperience.error)
    alert('You just added an experience!')
    //hides add experience form
    setShowAddForm(!showAddForm)

    //PROBLEM UPLOADING STATE
  }
  return(
    <div className='category-experiences'>
      <h4 className='experiences-title'>Experiences:</h4>
      {showAddForm && <AddForm handleAdd={handleAdd}/>}
      <button className='add-button' onClick={() => setShowAddForm(!showAddForm)}>{showAddForm ? 'Close' : 'Add Experience'}</button>
      {experiences.map((experience)=>{
        return(
          <div className='experience-list-section'>
            <CategoryExperienceList handleEdit={handleEdit} handleDelete={handleDelete} experience={experience}/>
          </div>
        )
      })

      }

    </div>
  )
}

const AddForm= ({handleAdd}) => {
  const [newExperience, setNewExperience] = useState('')
  return(
    <div className='add-form'>
      <form onSubmit={(e)=> handleAdd(e, newExperience)}>
        <input
          type= 'text'
          value={newExperience}
          onChange={(e)=> setNewExperience(e.target.value)}
          className='add-input'
        />
        <button className='submit-add' type='submit'>Submit</button>
      </form>
    </div>
  )
  
}