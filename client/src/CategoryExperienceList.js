import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { CategoryExperienceContext } from "./CategoryShow";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal"



function CategoryExperienceList ({experience}){
  const [showEdit, setShowEdit] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  //Grab data from useContext
  const {user} = useContext(AppContext)

  return(
    <div>
      <div className="experience-list">
        <li key={experience.id} className='experience-list-item'>
        <span className='experience-list-comment'>{experience.comment} -{experience.username}</span>
        {user.username === experience.username ? <Button variant='light'className='edit-experience-button' onClick={() => setShowEdit(!showEdit)}>{showEdit ? 'Close' : '✎'}</Button> : ''}
          {user.username === experience.username ? <Button  variant='light'className='delete-experience-button' onClick={() => setShowConfirm(!showConfirm)}>🗑</Button> : ''}
        </li>
        {/* <div className="experience-buttons"> */}

        {/* </div> */}
      </div>
        {showEdit && <PopUpEditForm experience={experience} setShowEdit={setShowEdit}/>}
        {showConfirm &&  <ConfirmDeleteForm setShowConfirm={setShowConfirm} showConfirm={showConfirm} id={experience.id}/>}
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
      <Button variant='dark' className='edit-button' onClick={(e)=>{ 
        setShowEdit(false)
        handleEdit(e, editComment)
        }}>Submit</Button>
    </form>
  )
}

const ConfirmDeleteForm= ({setShowConfirm, id, showConfirm})=> {
  //Grab callback func from useContext
  const {handleDelete} = useContext(CategoryExperienceContext)

  return(
      <Modal
      show={showConfirm}
      // onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete Experience</Modal.Title>
      </Modal.Header>
      <Modal.Body >
        Are you sure you want to delete?
      </Modal.Body>
      <Modal.Footer >
      <Button variant='dark' className='confirm-button' onClick={()=> setShowConfirm(false)}>No</Button>
      <Button variant='dark' className='confirm-button' type='submit' onClick={(e)=> {
          setShowConfirm(false)
          handleDelete(e,id)
        }}>Yes</Button>
      </Modal.Footer>
    </Modal>
  )
}