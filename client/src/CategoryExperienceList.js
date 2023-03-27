import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { CategoryExperienceContext } from "./CategoryShow";



function CategoryExperienceList ({experience}){
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  //Grab data from useContext
  const {user} = useContext(AppContext)

  return(
    <div>
      <li key={experience.id} className='experience-list-item'>{experience.comment} -{experience.username}</li>
      {user.username === experience.username ? <button className='edit-experience-button' onClick={() => setShowEdit(!showEdit)}>{showEdit ? 'Close' : '✎'}</button> : ''}
      {user.username === experience.username ? <button  className='delete-experience-button' onClick={() => setShowConfirm(!showConfirm)}>🗑</button> : ''}
      {showEdit && <PopUpEditForm experience={experience} setShowEdit={setShowEdit}/>}
      {showConfirm &&  <ConfirmDeleteForm setShowConfirm={setShowConfirm} id={experience.id}/>}
    </div>
  )
}
export default CategoryExperienceList;


const PopUpEditForm= ({experience,setShowEdit}) => {
  //Grab callback func from useContext
  const {handleEdit} = useContext(CategoryExperienceContext)

  const [editComment, setEditComment] = useState(experience)

  return(
    <form >
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
      <button className='edit-button' onClick={(e)=>{ 
        setShowEdit(false)
        handleEdit(e, editComment)
        }}>Submit</button>
    </form>
  )
}

const ConfirmDeleteForm= ({setShowConfirm, id})=> {
  //Grab callback func from useContext
  const {handleDelete} = useContext(CategoryExperienceContext)

  return(
    <div className='delete-form'>
      <div className='delete-confirm'>
        <h5>Are you sure you want to delete?</h5>
        <button className='confirm-button' onClick={()=> setShowConfirm(false)}>No</button>
        <button className='confirm-button' type='submit' onClick={(e)=> {
          setShowConfirm(false)
          handleDelete(e,id)
          }}>Yes</button>
      </div>
    </div>

  )
}