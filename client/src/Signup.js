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
  console.log(errors)
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
          navigate("/profile")
        })
      } else {
        r.json().then((err)=> {
          setErrors(err.errors)
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
    <div className="signup">
      <div className="signup-box">
      <button className='close-btn' onClick={()=> navigate('/')}>ⓧ</button> 
      <div className="signup-form">
        <h4 className="signup-title">Sign up:</h4>
        <form onSubmit={(e)=> handleSignUp(e)}>
          <div className="input-box">
            <label>👤</label>
            <input 
            className="signup-input"
            type="text" 
            placeholder="Username"
            value={userHash.username}
            onChange={(e)=> setUserHash(prevState => {
              return {...prevState, username: e.target.value}
            })}/>
          </div>
          <div className="input-box">
            <label>🔒</label>
            <input 
            className="signup-input"
            type="password"
            placeholder="Password" 
            value={userHash.password}
            onChange={(e)=> setUserHash(prevState => {
              return {...prevState, password: e.target.value}
            })}/>
          </div>
          
          <div className="input-box">
            <label>🔐</label>
            <input 
            className="signup-input"
            type="password" 
            placeholder="Password Confirmation"
            onChange={(e)=> setUserHash(prevState => {
              return {...prevState, password_confirmation: e.target.value}
            })}/>
          </div>
          <div className="input-box">
            <label>💬</label>
            <input 
            className="bio-input"
            type="text"
            placeholder="Tell us about yourself!"
            onChange={(e)=> setUserHash(prevState => {
              return {...prevState, bio: e.target.value}
            })}/>
          </div>
          <button className="signup-submit" type='submit'>Submit</button>     
        </form>
        <div className="have-account">
          <label>Already have an account?</label>
          <button className='login-btn' onClick={()=> navigate("/login")}>Login</button>
        </div>
        
        {errors && errors.map((error)=> {
          return(
            <p className="errors">{error}</p>
          )
        })
        
        }   
      </div>
      </div>

    </div>

  )
}
export default SignUp;