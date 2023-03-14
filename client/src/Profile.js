import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



function Profile({user, setUser}){
  console.log(user)
  const test = useSelector(state => state.test)
  const dispatch = useDispatch()
  console.log(test)

 return(
    <div>
      <h1>Welcome back {user.username}!</h1>
      <button onClick={()=> dispatch({type:'test'})}>test</button>
    </div>
  )
}

export default Profile;