import react from "react";
import { useNavigate } from "react-router-dom";

function Home({user}){
  const navigate = useNavigate()
  function handleClick(e){
    return navigate("/login")
  }
  return(
    <div>
      <div className="home-page">
        {!user && <button onClick={(e)=> handleClick(e)}>Login</button>}
        <h1 className="home-title">Self/Full</h1>
        <p className="home-title-description">The place for all your self-care needs.</p>      
      </div>
      <div className="what-is-self-care">
        <h2>What is self-care?</h2>
        <p>Self-care is the practice of individuals looking after their own health using knowledge and information avaialbale to them. It empowers individuals to take the time and do things that will help improve both their physical and mental health. Self-care can help manage stress, lower your risk of illness, and increase your energy. Small acts of self-care can have a big impact in your daily life.</p>
      </div>
      <div className="why-self-care">
        <h2>Why self-care?</h2>
        <p>Since 2020, post-pandemic, depression and mental illness has more than tripled in American adults. Pre-pandemic about 8% of American adults experienced depression, while now its more than 30%. That means more than 50 million Americans are affected.</p>
      </div>
      <div className="why-self-full">
        <h2>Why Self/Full?</h2>
        <p>At Self/Full you can learn more about self-care and how you can incorporate it in your daily life. There's a lot more to self-care than people know, and we're here to knock down those walls and refute any doubt or skepticism surrounding the word. Not only can you learn about self-care from us, but you can also hear from your fellow users' experiences! You can also share your own experiences so we can all learn from one another.</p>
      </div>
    
    </div>
    
  )
}

export default Home;

