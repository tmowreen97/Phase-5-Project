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
          props.setIsLogged(true)
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
    <div className="login">
      <div className="login-box">
      <button className='close-btn' onClick={()=> navigate('/')}>ⓧ</button> 
        <div className="login-form">
          <h4 className="login-title">Login:</h4>
          <form onSubmit={(e)=> handleLogin(e)}>
            <div className="input-box">
              <label>👤</label>
              <input 
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
              type="password"
              placeholder="Password"
              value={userHash.password}
              onChange={(e)=> setUserHash(prevState => {
                return {...prevState, password: e.target.value}
              })}/> 
            </div>
            <button type='submit'>Login</button>     
          </form>
          <div className="no-account">
            <label>Don't have an account?</label>
            <button className='sign-up-btn' onClick={()=> navigate("/signup")}>Sign Up</button>
          </div>
          {errors && 
            <p className="errors">{errors}</p>
          }
        </div>
      </div>


    </div>

  )
}
export default Login;