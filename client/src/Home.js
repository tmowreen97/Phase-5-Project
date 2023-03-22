import react from "react";
import { useNavigate } from "react-router-dom";

function Home({user}){
  console.log('in home', user)
  const navigate = useNavigate()
  function handleClick(e){
    return navigate("/login")
  }
  return(
    <div>
      <div className="home-page">
        {!user && <button className='login-button' onClick={(e)=> handleClick(e)}>Login</button>}
        <h1 className="home-title">Self/Full</h1>
        <p className="home-title-description">The place for all your self-care needs.</p>      
      </div>
      <div className="what-is-self-care">
        <img className='what-is-self-care-image' src='https://img.freepik.com/free-vector/self-care-concept_23-2148521977.jpg?w=2000'/>
        <div className="what-is">
          <h2>What is self-care?</h2>
          <p>Self-care is the practice of individuals looking after their own health using knowledge and information avaialbale to them. It empowers individuals to take the time and do things that will help improve both their physical and mental health. Self-care can help manage stress, lower your risk of illness, and increase your energy. Small acts of self-care can have a big impact in your daily life.</p>
        </div>
        
      </div>
      <div className="why-self-care">
        <img className='why-self-care-image' src='https://cdn.shopify.com/s/files/1/0251/5984/products/when-things-change-inside-you-things-change-around-you-shirt-1.png?v=1651713256'/>
        <div className="why">
          <h2>Why self-care?</h2>
          <p>Since 2020, post-pandemic, depression and mental illness has more than tripled in American adults. Pre-pandemic about 8% of American adults experienced depression, while now its more than 30%. That means more than 50 million Americans are affected.</p>
        </div>
        
      </div>
      <div className="why-self-full">
        <div className="why-self">
          <h2>Why Self/Full?</h2>
          <p>At Self/Full you can learn more about self-care and how you can incorporate it in your daily life. There's a lot more to self-care than people know, and we're here to knock down those walls and refute any doubt or skepticism surrounding the word. Not only can you learn about self-care from us, but you can also hear from your fellow users' experiences! You can also share your own experiences so we can all learn from one another.</p>
        </div>

      </div>
    
    </div>
    
  )
}

export default Home;

