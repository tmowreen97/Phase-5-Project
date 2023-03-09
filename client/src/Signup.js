import react from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){
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
        <label>Password Confirmation:</label>
        <input>
        </input> 
        <button type='submit'>Submit</button>     
      </form>
      <label>Already have an account?</label>
      <button onClick={()=> navigate("/login")}>Login</button>
      <label>Return to Home</label>
      <button onClick={()=> navigate('/')}>Close</button>    
    </div>

  )
}
export default SignUp;