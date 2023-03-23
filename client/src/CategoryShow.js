import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useAddExperience, useEditExperience, useDeleteExperience } from './mutations/experienceMutations';
import { useMutation, mutate } from 'react-query';
import { AppContext } from './App';

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
  const [showPopUp, setShowPopUp] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const [experiences, setExperiences] = useState(category.experiences)
  const {mutate: addExperience} = useAddExperience()
  const {mutate: editExperience} = useEditExperience()
  const {mutate: deleteExperience} = useDeleteExperience()

  console.log('experiences,', experiences)
  console.log('category', category)
  console.log('user', user)

  function handleEdit(e, editComment){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != editComment.id)
    })
    updatedExperiences.push(editComment)
    editExperience(editComment)
    setExperiences(updatedExperiences)
    setShowPopUp(!showPopUp)
  }

  function handleDelete(e, id){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != id)
    })
    deleteExperience(id)
    setExperiences(updatedExperiences)
    setShowConfirm(!showConfirm)
  }

  const mutationFn = (experience) => {
    fetch(`/experiences/${experience.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(experience)
    })
    .then(resp => resp.json())
  }

  const addMutationData = useMutation(mutationFn, {
    onError: (error) => {return(error)}
  })


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
    //calls useMutation function
    // addExperience(experience)
    mutate({addMutationData}, {
      onError: (error) => console.log(error)
    })
    //updates state values
    setExperiences(updatedExperiences)
    console.log('error',addExperience.error)
    // alert('You just added an experience!')
    // window.location.reload()
    //hides add experience form
    setShowAddForm(!showAddForm)
  }
  return(
    <div className='category-experiences'>
      <h4 className='experiences-title'>Experiences:</h4>
      {showAddForm && <AddForm handleAdd={handleAdd}/>}
      <button className='add-button' onClick={() => setShowAddForm(!showAddForm)}>{showAddForm ? 'Close' : 'Add Experience'}</button>
      {experiences.map((experience)=>{
        return(
          <div className='experience-list-section'>
            <li key={experience.id} className='experience-list-item'>{experience.comment} -@{experience.username}</li>
            {(experience.username == user.username) ? <button className='edit-experience-button' onClick={() => setShowPopUp(!showPopUp)}>{showPopUp ? 'Close' : '✎'}</button> : ''}
            {(experience.username == user.username) ? <button className='delete-experience-button' onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? '' : '🗑'}</button> : ''}
            {showPopUp && (experience.username == user.username) ? <PopUpEditForm comment={experience} handleEdit={handleEdit}/> : ''}
            {showConfirm && (experience.username == user.username) ?  <ConfirmDeleteForm setShowConfirm={setShowConfirm} handleDelete={handleDelete} id={experience.id}/> : ''}
            {
              addExperience.isError && <p>{addExperience.error.message}</p>
            }
          </div>
        )
      })

      }

    </div>
  )
}

const PopUpEditForm= ({comment, handleEdit}) => {
  const [editComment, setEditComment] = useState(comment)

  return(
    <form>
      <input 
      type='text'
      className='edit-input'
      value={editComment.comment}
      onChange={(e)=> {
        setEditComment(prevState => {
          return {...prevState, comment: e.target.value}
        })
      }}
      />
      <button className='edit-button' type='submit' onClick={(e)=> handleEdit(e, editComment)}>Submit</button>
    </form>
  )
}

const ConfirmDeleteForm= ({setShowConfirm, handleDelete, id})=> {
  console.log('in confirm', id)
  return(
    <div className='delete-form'>
      <div className='delete-confirm'>
        <h5>Are you sure you want to delete?</h5>
        <button className='confirm-button' onClick={()=> setShowConfirm(false)}>No</button>
        <button className='confirm-button' type='submit' onClick={(e)=> handleDelete(e,id)}>Yes</button>
      </div>
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