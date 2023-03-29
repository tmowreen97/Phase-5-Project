import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";


function Profile(){
  const navigate = useNavigate()
  const {user} = useContext(AppContext)
 return(
    <div className="profile">
      <img src={'https://media.istockphoto.com/id/1218481548/vector/cute-cat-waving-paw-cartoon-vector-illustration.jpg?s=170667a&w=0&k=20&c=yw-bgn7EaMdGFE6AuKz-FS76Oa7G2HW5JBpEvYpJYd8='} alt='welcome' className="welcome-image"/>
      <div className="user-info">
        <div className="welcome-statement">
          <h1 className="welcome">Welcome back</h1>
          <h1 className="welcome-username">{user.username}!</h1>
        </div>
        <p className="profile-bio">{user.bio}</p>
        <div className="user-experiences">
          <h4 className="user-experiences-title">Your Experiences:</h4>
          { user.experiences.length===0 ? <p>You have no experiences yet ˙◠˙. Get your self-care on!</p> :
          user.experiences.map((experience)=> {
            return( <li key={experience.id} title="Click to navigate to category" onClick={()=> navigate(`/category/${experience.category_id}`)}className="user-experiences-list">{experience.comment} -{experience.category}</li>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile;