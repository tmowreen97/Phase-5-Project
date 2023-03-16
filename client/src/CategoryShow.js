import React from 'react';
import {useParams} from 'react-router-dom';
import { useState } from 'react';

function CategoryShow({categories, user}){

  const [showEdit, setShowEdit] = useState(false)

  //to handle edit experience PATCH request
  function handleEditExperience(e){
    e.preventDefault()
    console.log(e.target.value)
  }

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
          <CategoryExperiences category={category} user={user} showEdit={showEdit} setShowEdit={setShowEdit} handleEditExperience={handleEditExperience}/>
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

const CategoryExperiences = ({category, user, showEdit, setShowEdit, handleEditExperience}) => {
  const [showPopUp, setShowPopUp] = useState(false)
  return(
    <div className='category-experiences'>
      {/* {showEdit ? <button>Edit Mode</button> : ''} */}
      <h4 className='experiences-title'>Experiences:</h4>
      {category.experiences.map((experience)=>{
        if (experience.username == user.username){
          setShowEdit(true)
        }
        return(
          <>
            <li key={experience.id} className='experience-list-item'>{experience.comment} -@{experience.username}</li>
            {showPopUp ? <PopUpEditForm comment={experience.comment} handleEditExperience={handleEditExperience}/> : ''}
            {showEdit ? <button onClick={() => setShowPopUp(!showPopUp)}>{showPopUp ? 'Close' : 'Edit'}</button> : ''}
          </>
          

        )
      })

      }

    </div>
  )
}

const PopUpEditForm= ({comment, handleEditExperience}) => {
  const [editComment, setEditComment] = useState(comment)
  return(
    <form>
      <input 
      type='text'
      value={editComment}
      onChange={(e)=> {
        setEditComment(e.target.value)
      }}
      />
      <button type='submit' onClick={(e)=> handleEditExperience(e)}>Submit</button>
    </form>
  )
}