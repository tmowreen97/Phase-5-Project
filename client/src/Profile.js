import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Profile({user, setUser}){
  console.log(user)
  const loggedIn = useSelector(state => state.loggedIn)
  console.log(loggedIn)

 return(
    <div>
      <h1>Welcome back {user.username}!</h1>
    </div>
  )
}

export default Profile;