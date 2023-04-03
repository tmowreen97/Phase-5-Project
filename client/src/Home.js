import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import Button from "react-bootstrap/esm/Button";

function Home(){
  const navigate = useNavigate()
  const {user} = useContext(AppContext)
  function handleClick(e){
    return navigate("/login")
  }

  //an array of colors,to changes home page title to different color when hovered
  let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  function handleMouseOver(e){
    let random_color = colorArray[Math.floor(Math.random()*colorArray.length)]
    e.target.style.color=random_color
  }
  return(
    <div>
      <div className="home-page">
        {!user && <Button variant='light' className='login-button' onClick={(e)=> handleClick(e)}>Login</Button>}
        <h1 className="home-title" onMouseOver={(e)=> handleMouseOver(e)}>Self/Full</h1>
        <p className="home-title-description">The place for all your self-care needs.</p>  
        <img src="https://berkeley-institute.com/wp-content/uploads/2018/05/scroll-down-arrow.gif" className="scroll" alt='scroll'/>    
      </div>
      <div className="what-is-self-care">
        <img className='what-is-self-care-image' src='https://img.freepik.com/free-vector/self-care-concept_23-2148521977.jpg?w=2000' alt='Love Yourself'/>
        <div className="what-is">
          <h2>What is self-care?</h2>
          <p>Self-care is the practice of individuals looking after their own health using knowledge and information available to them. It empowers individuals to take the time and do things that will help improve both their physical and mental health. Self-care can help manage stress, lower your risk of illness, and increase your energy. Small acts of self-care can have a big impact in your daily life.</p>
        </div>
        
      </div>
      <div className="why-self-care">
        <img className='why-self-care-image' src='https://cdn-images.threadless.com/threadless-media/artist_shops/shops/tobefonseca/products/2871798/shirt-1665755564-b1ef52f20085da214540f5f76f359787.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZjNlNGQ0In1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19' alt='Things Change'/>
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
                  <img src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/13029/images/StmHEoGTsW1VLp3N9oTB_source.gif" className="why-self-full-image" alt="self love club"/>

      </div>
    
    </div>
    
  )
}

export default Home;

