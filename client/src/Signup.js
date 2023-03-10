import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props){
  const navigate= useNavigate()
  const [userHash, setUserHash]= useState({
    username: "",
    password: "",
    password_confirmation: "",
    bio: ""
  })
  const [errors, setErrors] = useState([])

  function handleSignUp(e){
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userHash),
    })
    .then((r)=> {
      if(r.ok){
        r.json().then((user)=> {
          props.setUser(user)
          setUserHash({
            username: "",
            password: "",
            password_confirmation: "",
            bio: ""
          })
          navigate("/me")
        })
      } else {
        r.json().then((err)=> {
          setErrors(err.error)
          setUserHash({
            username: "",
            password: "",
            password_confirmation: "",
            bio: ""
          })
        })
      }
    })
  }
  return(
    <div>
      <form onSubmit={(e)=> handleSignUp(e)}>
        <label>Username:</label>
        <input type="text" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, username: e.target.value}
        })}/>
        <label>Password:</label>
        <input type="text" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, password: e.target.value}
        })}/>
        <label>Password Confirmation:</label>
        <input type="text" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, password_confirmation: e.target.value}
        })}/>
        <label>Bio:</label>
        <input type="text" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, bio: e.target.value}
        })}/>
        <button type='submit'>Submit</button>     
      </form>
      <label>Already have an account?</label>
      <button onClick={()=> navigate("/login")}>Login</button>
      <label>Return to Home</label>
      <button onClick={()=> navigate('/')}>Close</button> 
      {errors && 
      <p>{errors}</p>
      }   
    </div>

  )
}
export default SignUp;