import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Login(props){
  const loggedIn = useSelector(state => state.loggedIn)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [userHash, setUserHash] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors]= useState([])

  function handleLogin(e){
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userHash),
    })
    .then((r)=> {
      if (r.ok) {
        // debugger
        r.json().then((user)=> {
          props.setUser(user)
          setUserHash({
            username: "",
            password: ""
          })
          navigate("/profile")
        })
      } else {
        // debugger
        r.json().then((err)=> {
          setErrors(err.error)
          setUserHash({
            username: "",
            password: ""
          })
        })
      }
    })
  }

  console.log(userHash)



  return(
    <div>
      <form onSubmit={(e)=> handleLogin(e)}>
        <label>Username:</label>
        <input type="text" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, username: e.target.value}
        })}/>
        <label>Password:</label>
        <input type="password" onChange={(e)=> setUserHash(prevState => {
          return {...prevState, password: e.target.value}
        })}/>        
        <button type='submit'>Login</button>     
      </form>
      <label>Don't have an account?</label>
      <button onClick={()=> navigate("/signup")}>Sign Up</button>      
      <label>Return to Home</label>
      <button onClick={()=> navigate('/')}>Close</button> 
      {errors && 
        <p>{errors}</p>
      }
    </div>

  )
}
export default Login;