import react from "react";
import { useNavigate } from "react-router-dom";

function Home(){
  const navigate = useNavigate()
  function handleClick(e){
    return navigate("/login")
  }
  return(
    <div>
      <button onClick={(e)=> handleClick(e)}>Login</button>
      <h1>Self/Full</h1>
      <p>Welcome to Self Full. Self Full is the place for all your self-care needs.</p>      
    </div>

  )
}

export default Home;