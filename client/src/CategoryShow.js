import React from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react';

function CategoryShow({categories, user, handleEditExperience}){

  //to handle edit experience PATCH request
  

  let { id } = useParams()
  console.log({id})
  const currentCategory = categories.filter((cat)=> {
    return (
      cat.id == id
    )
  })
  console.log(currentCategory)



  return(
    currentCategory.map((category)=> {
      return(
        <div key={category.id} className='category-show'>
          <h1 className='category-title'>{category.name}</h1>
          <h4 className='category-description-title'>Description:</h4>
          <h5 className='description'>{category.description}</h5>
          <CategoryActivities category={category}/>
          <CategoryExperiences category={category} user={user} handleEditExperience={handleEditExperience}/>
        </div>
      )
    })
  )
}

export default CategoryShow;

const CategoryActivities = ({category}) => {
  return(
    <div>
          <h4 className='activities-title'>Activities:</h4>
          {category.activities.map((activity)=> {
            return(
              <li key={activity.id} className='activity-list-item'>{activity.name}</li>
            )
          })}
    </div>

  )
}

const CategoryExperiences = ({category, user, handleEditExperience}) => {
  const [showPopUp, setShowPopUp] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const [experiences, setExperiences] = useState(category.experiences)
  console.log('experiences,', experiences)
  console.log('category', category)
  console.log('user', user)

  function handleEditExperience(e, editComment){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != editComment.id)
    })
    console.log(updatedExperiences)
    fetch(`/experiences/${editComment.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editComment)
    })
    .then(resp=> resp.json())
    .then(data => {
      setShowPopUp(!showPopUp)
      updatedExperiences.push(data)
      setExperiences(updatedExperiences)
    })
  }

  function handleDelete(e, id){
    e.preventDefault()
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != id)
    })
    fetch(`/experiences/${id}`, {
      method: 'DELETE'
    })
    .then(resp=> resp.json)
    .then(data => {
      setShowConfirm(!showConfirm)
      setExperiences(updatedExperiences)
    })
  }

  function handleAddExperience(e, newExperience){
    e.preventDefault()
    console.log(newExperience)
    const updatedExperiences = [...experiences]
    console.log('updated', updatedExperiences)
    fetch('/experiences', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        comment: newExperience,
        user_id: user.id,
        category_id: category.id
      })
    })
    .then(resp=> resp.json())
    .then(data => {
      updatedExperiences.push(data)
      setExperiences(updatedExperiences)
    })
    setShowAddForm(!showAddForm)
    

  }
  return(
    <div className='category-experiences'>
      <h4 className='experiences-title'>Experiences:</h4>
      <button className='add-button' onClick={() => setShowAddForm(!showAddForm)}>{showAddForm ? 'Close' : 'Add Experience'}</button>
      {showAddForm && <AddForm handleAddExperience={handleAddExperience}/>}
      {experiences.map((experience)=>{
        return(
          <div className='experience-list-section'>
            <li key={experience.id} className='experience-list-item'>{experience.comment} -@{experience.username}</li>
            {(experience.username == user.username) ? <button className='experience-button' onClick={() => setShowPopUp(!showPopUp)}>{showPopUp ? 'Close' : '✎'}</button> : ''}
            {(experience.username == user.username) ? <button className='experience-button' onClick={() => setShowConfirm(!showConfirm)}>{showConfirm ? '' : '🗑'}</button> : ''}
            {showPopUp && (experience.username == user.username) ? <PopUpEditForm setShowPopUp={setShowPopUp} comment={experience} handleEditExperience={handleEditExperience} setExperiences={setExperiences} experiences={experiences}/> : ''}
            {showConfirm && (experience.username == user.username) ?  <ConfirmDeleteForm setShowConfirm={setShowConfirm} handleDelete={handleDelete} id={experience.id}/> : ''}
          </div>
        )
      })

      }

    </div>
  )
}

const PopUpEditForm= ({comment, handleEditExperience, setExperiences, experiences, setShowPopUp}) => {
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
      <button className='edit-button' type='submit' onClick={(e)=> handleEditExperience(e, editComment)}>Submit</button>
    </form>
  )
}

const ConfirmDeleteForm= ({setShowConfirm, handleDelete, id})=> {
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

const AddForm= ({handleAddExperience}) => {
  const [newExperience, setNewExperience] = useState('')
  return(
    <div className='add-form'>
      <form onSubmit={(e)=> handleAddExperience(e, newExperience)}>
        <input
          type= 'text'
          value={newExperience}
          onChange={(e)=> setNewExperience(e.target.value)}
        />
        <button className='submit-add' type='submit'>Submit</button>
      </form>
      

    </div>
  )
  
}