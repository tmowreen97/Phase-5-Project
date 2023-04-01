import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import Images from "./Images";
import { Country, State, City }  from 'country-state-city';


function Profile(){
  const navigate = useNavigate()
  const {user, setUser} = useContext(AppContext)
  const [showEdit, setShowEdit] = useState(false)
  const [showImages, setShowImages]= useState(false)
  const [editUser, setEditUser] = useState({
    image: user.image,
    username: user.username,
    bio: user.bio,
  })

  console.log(State.getStatesOfCountry('US'))
  console.log(City.getCitiesOfState('US', 'NY'))


  const profileImages = ['https://cdn-icons-png.flaticon.com/512/4140/4140073.png','https://cdn-icons-png.flaticon.com/512/4139/4139951.png','https://cdn-icons-png.flaticon.com/512/4140/4140074.png','https://cdn-icons-png.flaticon.com/512/6833/6833591.png','https://cdn-icons-png.flaticon.com/512/6998/6998135.png','https://cdn-icons-png.flaticon.com/512/6998/6998040.png', 'https://cdn-icons-png.flaticon.com/512/6998/6998031.png','https://cdn-icons-png.flaticon.com/512/6998/6998065.png','https://cdn-icons-png.flaticon.com/512/9193/9193915.png','https://cdn-icons-png.flaticon.com/512/4625/4625826.png','https://cdn-icons-png.flaticon.com/512/4140/4140047.png', 'https://cdn-icons-png.flaticon.com/512/9764/9764588.png', 'https://cdn-icons-png.flaticon.com/512/4140/4140076.png', 'https://cdn-icons-png.flaticon.com/512/4140/4140072.png', 'https://cdn-icons-png.flaticon.com/512/4140/4140057.png', 'https://cdn-icons-png.flaticon.com/512/4140/4140054.png', 'https://cdn-icons-png.flaticon.com/512/236/236831.png', 'https://cdn-icons-png.flaticon.com/512/201/201634.png', 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', 'https://cdn-icons-png.flaticon.com/512/6997/6997662.png', 'https://cdn-icons-png.flaticon.com/512/428/428933.png','https://cdn-icons-png.flaticon.com/512/219/219970.png', 'https://cdn-icons-png.flaticon.com/512/236/236832.png', 'https://cdn-icons-png.flaticon.com/512/1999/1999625.png', 'https://cdn-icons-png.flaticon.com/512/219/219969.png']


  console.log(profileImages.length)


  function handleEdit(e,editUser){
    e.preventDefault()
    console.log(editUser)
    axios.patch(`/users/${user.id}`, editUser)
    .then(resp => setUser(resp.data))
    setShowEdit(!showEdit)
  }

 return(
    <div className="profile">
      <Button variant='light' className="profile-edit-button" onClick={() => setShowEdit(!showEdit)}>Edit Profile</Button>
      <ProfileEditForm 
      show={showEdit} 
      backdrop="static"
      keyboard={false} 
      showImages={showImages}
      setShowImages={setShowImages}
      editUser={editUser} 
      setEditUser={setEditUser} 
      handleEdit={handleEdit} 
      user={user} 
      onHide={()=> {
        //Set all values back to default
        setEditUser({
          image: user.image,
          username: user.username,
          bio: user.bio,
        })
        setShowImages(false)
        setShowEdit(false)
        }}/>
      <img src={'https://media.istockphoto.com/id/1218481548/vector/cute-cat-waving-paw-cartoon-vector-illustration.jpg?s=170667a&w=0&k=20&c=yw-bgn7EaMdGFE6AuKz-FS76Oa7G2HW5JBpEvYpJYd8='} alt='welcome' className="welcome-image"/>
      <div className="user-info">
        <div className="welcome-statement">
          <h1 className="welcome">Welcome back</h1>
          <h1 className="welcome-username">{user.username}!</h1>
        </div>
        <div className="image-bio">
          <img className='profile-image' src={user.image}/>
          <div className="profile-bio">
              <h4>Bio:</h4>
              <p className="bio">{user.bio}</p>

          </div>
          
        </div>
        
        <div className="user-experiences">
          <h4 className="user-experiences-title">Your Experiences:</h4>
          { user.experiences.length===0 ? <p>You have no experiences yet ˙◠˙. Get your self-care on!</p> :
          user.experiences.map((experience)=> {
            return( 
            <li key={experience.id} className="user-experiences-list">
              <span className='user-experiences-list-item'title="Click to navigate to category" onClick={()=> navigate(`/category/${experience.category_id}`)} >{experience.comment} -{experience.category}</span>
            </li>
            )
          })}
        </div>
      </div>
      

    </div>
  )
}

export default Profile;


const ProfileEditForm = (props) => {

  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-form"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="profile-edit">
        <form className="edit-profile-form">
          <ul className="image-change">
            <img className='edit-profile-image' src={props.editUser.image} onClick={()=> props.setShowImages(!props.showImages)}/>
          {props.showImages && <Images setEditUser={props.setEditUser} setShowImages={props.setShowImages}/>}
          </ul>
          {/* <ul>
            <select></select>
          </ul> */}
          <label>Username:</label>
          <input
           placeholder="Username"
          className="username-input"
          type='text'
          value={props.editUser.username}
          onChange={(e)=> props.setEditUser((prevState)=> {
            return(
              {...prevState, username: e.target.value}
            )
          })}
          />
          <label>Bio:</label>
          <textarea
          maxLength={400}
          placeholder="Bio; 400 character limit"
          className="bio-textarea"
          type='textarea'
          rows={8}
          cols={20}
          value={props.editUser.bio}
          onChange={(e)=> props.setEditUser((prevState)=> {
            return(
              {...prevState, bio: e.target.value}
            )
          })}
          />
        </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='light' onClick={(e) => props.handleEdit(e, props.editUser)}>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
  
}

