import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



function Profile({user, setUser}){
  console.log(user)
  const userRedux = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log('userRedux in Profile', userRedux)

 return(
    <div className="profile">
      <img src={'https://media.istockphoto.com/id/1218481548/vector/cute-cat-waving-paw-cartoon-vector-illustration.jpg?s=170667a&w=0&k=20&c=yw-bgn7EaMdGFE6AuKz-FS76Oa7G2HW5JBpEvYpJYd8='} className="welcome-image"/>
      <div className="user-info">
        <div className="welcome-statement">
          <h1 className="welcome">Welcome back</h1>
          <h1 className="welcome-username">{user.username}!</h1>
        </div>
        <p className="profile-bio">{user.bio}</p>
        <div className="user-experiences">
          <h4>Your Experiences:</h4>
          { user.experiences.length==0 ? <p>You have no experiences yet ˙◠˙. Get your self-care on!</p> :
          user.experiences.map((experience)=> {
            return( <li>{experience.comment} -{experience.category}</li>)
          })}
        </div>
      </div>
      <button onClick={()=> dispatch({type:'test'})}>test</button>
    </div>
  )
}

export default Profile;