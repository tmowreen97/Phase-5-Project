import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import { useMutation } from "react-query";


function Login(){

  const {setUser} = useContext(AppContext)

  const navigate= useNavigate()
  const [userHash, setUserHash] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors]= useState([])

  const loginUser = useMutation((user_data)=> {
    return(
      axios.post('/login', user_data)
      .then(response => {
        setErrors(null)
        return(response.data)
      })
    )
  },{
    onSuccess: (data)=> {
      setUser(data)
      navigate("/profile")
    },
    onError: (error)=> {
      setErrors(error.response.data.error)
    }
  }
  )

  function handleLogin(e){
    e.preventDefault()
    loginUser.mutate(userHash)
  }

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
              className="login-input"
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
              className="login-input"
              type="password"
              placeholder="Password"
              value={userHash.password}
              onChange={(e)=> setUserHash(prevState => {
                return {...prevState, password: e.target.value}
              })}/> 
            </div>
            <button className='login-submit' type='submit'>Login</button>     
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