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

  const [experiences, setExperiences] = useState(category.experiences)
  console.log('experiences,', experiences)

  function handleDelete(id){
    const updatedExperiences = experiences.filter((experience)=> {
      return (experience.id != id)
    })
    setExperiences(updatedExperiences)

  }
  return(
    <div className='category-experiences'>
      <h4 className='experiences-title'>Experiences:</h4>
      {experiences.map((experience)=>{
        return(
          <div className='experience-list-section'>
            <li key={experience.id} className='experience-list-item'>{experience.comment} -@{experience.username}</li>
            {showPopUp && (experience.username == user.username) ? <PopUpEditForm setShowPopUp={setShowPopUp} comment={experience} handleEditExperience={handleEditExperience} setExperiences={setExperiences} experiences={experiences}/> : ''}
            {(experience.username == user.username) ? <button className='experience-button' onClick={() => setShowPopUp(!showPopUp)}>{showPopUp ? '' : '✎'}</button> : ''}
            {(experience.username == user.username) ? <button className='experience-button' onClick={() => setShowConfirm(!showConfirm)}>{showPopUp ? '' : '🗑'}</button> : ''}
            {showConfirm && (experience.username == user.username) ?  <ConfirmDeleteForm setShowConfirm={setShowConfirm} handleDelete={handleDelete} experience={experience.id}/> : ''}
          </div>
        )
      })

      }

    </div>
  )
}

const PopUpEditForm= ({comment, handleEditExperience, setExperiences, experiences, setShowPopUp}) => {
  const [editComment, setEditComment] = useState(comment)

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
      setShowPopUp(false)
      updatedExperiences.push(data)
      setExperiences(updatedExperiences)
    })
  }

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
      <button className='edit-button' onClick={() => setShowPopUp(false)}>Close</button>
    </form>
  )
}

const ConfirmDeleteForm= ({setShowConfirm, handleDelete, experience})=> {
  return(
    <div className='delete-form'>
      <div className='delete-confirm'>
        <h5>Are you sure you want to delete?</h5>
        <button className='confirm-button' onClick={()=> setShowConfirm(false)}>No</button>
        <button className='confirm-button' onClick={()=> handleDelete(experience)}>Yes</button>
      </div>
    </div>

  )
}