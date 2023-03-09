import react from "react";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate= useNavigate()

  return(
    <div>
      <form>
        <label>Username:</label>
        <input>
        </input>
        <label>Password:</label>
        <input>
        </input> 
        <button type='submit'>Login</button>     
      </form>
      <label>Don't have an account?</label>
      <button onClick={()=> navigate("/signup")}>Sign Up</button>      
      <label>Return to Home</label>
      <button onClick={()=> navigate('/')}>Close</button> 
    </div>

  )
}
export default Login;