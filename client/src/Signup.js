import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import { useMutation } from "react-query";
import { State, City }  from 'country-state-city';


function SignUp(){

  const navigate= useNavigate()
  const {setUser} = useContext(AppContext)
  const [userHash, setUserHash]= useState({
    username: "",
    password: "",
    password_confirmation: "",
    state:"",
    city:"",
    bio: ""
  })
  const [errors, setErrors] = useState([])
  const listOfStates = State.getStatesOfCountry('US')


  const signupUser = useMutation((user_data)=> {
    return(
      axios.post('/signup', user_data)
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
      setErrors(error.response.data.errors)
    }
  }
  )
  
  function handleSignUp(e){
    e.preventDefault()
    signupUser.mutate(userHash)
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
          <div className="state-box">
            <label>📌</label>
           <select className='state-select' onChange={(e)=> setUserHash(prevState => {
              return {...prevState, state:e.target.value }
            })}>
              <option value="" selected disabled hidden>Select State</option>
              {listOfStates.map((state)=> {
                return <option>{state.isoCode}</option>
              })}
            </select>
          
          
          {userHash.state && <select className="city-select" onChange={(e)=> setUserHash(prevState => {
              return {...prevState, city:e.target.value }
            })}>
            <option value="" selected disabled hidden>Select City</option>
            {City.getCitiesOfState('US', userHash.state).map((city)=> {
              return <option>{city.name}</option>
            })}




          </select>}
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
            <ul className="errors">{error}</ul>
          )
        })
        }   
      </div>
      </div>

    </div>

  )
}
export default SignUp;