import React from "react";
import { useNavigate } from "react-router-dom";


function Profile({user, setUser}){
  console.log(user)

 return(
    <div>
      <h1>Welcome back {user.username}!</h1>
    </div>
  )
}

export default Profile;