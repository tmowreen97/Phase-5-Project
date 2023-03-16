import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



function Profile({user, setUser}){
  console.log(user)
  const userRedux = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log('userRedux in Profile', userRedux)

 return(
    <div>
      <h1>Welcome back {user.username}!</h1>
      <button onClick={()=> dispatch({type:'test'})}>test</button>
    </div>
  )
}

export default Profile;