import React, { useContext, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import axios from "axios";
import Images from "./Images";
import { State, City }  from 'country-state-city';


function Profile(){
  const navigate = useNavigate()
  const [errors, setErrors]= useState([])
  const {user, setUser} = useContext(AppContext)
  const [showEdit, setShowEdit] = useState(false)
  const [showImages, setShowImages]= useState(false)
  const [editUser, setEditUser] = useState({
    image: user.image,
    username: user.username,
    bio: user.bio,
    state: user.state,
    city: user.city
  })

  function handleEdit(e,editUser){
    e.preventDefault()
    console.log(editUser)
    let listOfCities = City.getCitiesOfState('US', editUser.state)
    const found = listOfCities.find(city => city.name===editUser.city)
    if (found){
      setErrors([])
      axios.patch(`/users/${user.id}`, editUser)
      .then(resp => setUser(resp.data))
      setShowEdit(!showEdit)
    } else{
      setErrors(["State and city don't match!"])

    }
    
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
      errors={errors}
      onHide={()=> {
        //Set all values back to default
        setEditUser({
          image: user.image,
          username: user.username,
          bio: user.bio,
          state: user.state,
          city: user.city
        })
        setErrors([])
        setShowImages(false)
        setShowEdit(false)
        }}/>
      <img src={'https://media.istockphoto.com/id/1218481548/vector/cute-cat-waving-paw-cartoon-vector-illustration.jpg?s=170667a&w=0&k=20&c=yw-bgn7EaMdGFE6AuKz-FS76Oa7G2HW5JBpEvYpJYd8='} alt='welcome' className="welcome-image"/>
      <div className="user-info">
        <div className="welcome-statement">
          <h1 className="welcome">Welcome back</h1>
          <h1 className="welcome-username">{user.username}!</h1>
        </div>
        <div className="profile-location">
          <h5>{user.city}, {user.state}</h5>

        </div>
        <div className="image-bio">
          <img title='Edit profile to change picture' className='profile-image' src={user.image} alt='prof-img'/>
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
  const listOfStates = State.getStatesOfCountry('US')

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
            <img className='edit-profile-image' title={props.showImages ? 'Click to close' : 'Click to edit'}src={props.editUser.image} onClick={()=> props.setShowImages(!props.showImages)} alt='edi-img'/>
          {props.showImages && <Images setEditUser={props.setEditUser} setShowImages={props.setShowImages}/>}
          </ul>
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
          <label>Location:</label>
          <ul className="edit-location">
          <select className='edit-state-select' onChange={(e)=> props.setEditUser(prevState => {
              return {...prevState, state:e.target.value }
            })}>
            <option value="" selected disabled hidden>{props.editUser.state}</option>
              {listOfStates.map((state)=> {
                return <option>{state.isoCode}</option>
              })}
          </select>
          {props.user.state && <select className="edit-city-select" onChange={(e)=> props.setEditUser(prevState => {
              return {...prevState, city:e.target.value }
            })}>
            <option value="" selected disabled hidden>{props.editUser.city}</option>
            {City.getCitiesOfState('US', props.editUser.state).map((city)=> {
              return <option>{city.name}</option>
            })}
          </select>}
          </ul>
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
        {props.errors && props.errors.map((error)=> {
          return(
            <p className="errors">{error}</p>
          )
        })
        }
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='light' onClick={(e) => props.handleEdit(e, props.editUser)}>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
  
}

