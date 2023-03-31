import ImageGallery from "react-image-gallery"
import Carousel from 'react-bootstrap/Carousel';

// import "~react-image-gallery/styles/css/image-gallery.css"

function Images(){

  const imageArray=[{original:'https://cdn-icons-png.flaticon.com/512/4140/4140073.png', orginalAlt:'kid'},
{original:'https://cdn-icons-png.flaticon.com/512/4140/4140076.png', orginalAlt:'kid'},
{original:'https://cdn-icons-png.flaticon.com/512/4140/4140054.png', orginalAlt:'short hair bangs'},
{original:'https://cdn-icons-png.flaticon.com/512/201/201634.png', orginalAlt:'short hair brunette'},
{original:'https://cdn-icons-png.flaticon.com/512/3135/3135789.png', orginalAlt:'blonde'},
{original:'https://cdn-icons-png.flaticon.com/512/6997/6997662.png', orginalAlt:'long hair'},
{original:'https://cdn-icons-png.flaticon.com/512/219/219969.png', orginalAlt:'lipstick'},
{original:'https://cdn-icons-png.flaticon.com/512/4140/4140047.png', orginalAlt:'ponytail'},
{original:'https://cdn-icons-png.flaticon.com/512/6833/6833591.png', orginalAlt:'earrings'},
{original:'https://cdn-icons-png.flaticon.com/512/9193/9193915.png', orginalAlt:'hijab'},
{original:'https://cdn-icons-png.flaticon.com/512/4139/4139951.png', orginalAlt:'adult'},
{original:'https://cdn-icons-png.flaticon.com/512/6998/6998135.png', orginalAlt:'doctor'},
{original:'https://cdn-icons-png.flaticon.com/512/4625/4625826.png', orginalAlt:'doctor'},

{original:'https://cdn-icons-png.flaticon.com/512/4140/4140072.png', orginalAlt:'kid'},
{original:'https://cdn-icons-png.flaticon.com/512/4140/4140074.png', orginalAlt:'kid'},
{original:'https://cdn-icons-png.flaticon.com/512/1999/1999625.png', orginalAlt:'teen'},
{original:'https://cdn-icons-png.flaticon.com/512/236/236831.png', orginalAlt:'goatee'},
{original:'https://cdn-icons-png.flaticon.com/512/236/236832.png', orginalAlt:'tie'},
{original:'https://cdn-icons-png.flaticon.com/512/219/219970.png', orginalAlt:'glasses'},
{original:'https://cdn-icons-png.flaticon.com/512/428/428933.png', orginalAlt:'adult'},
{original:'https://cdn-icons-png.flaticon.com/512/4140/4140057.png', orginalAlt:'adult'},
{original:'https://cdn-icons-png.flaticon.com/512/9764/9764588.png', orginalAlt:'turban'},
{original:'https://cdn-icons-png.flaticon.com/512/6998/6998065.png', orginalAlt:'sunglasses'},
{original:'https://cdn-icons-png.flaticon.com/512/6998/6998031.png', orginalAlt:'welder'},
{original:'https://cdn-icons-png.flaticon.com/512/6998/6998040.png', orginalAlt:'customerservice'}]
  return (
    <div className="image-carousel">
    <Carousel
    interval={null}
    slide={false}
    >
    {imageArray.map((image)=> {
      return(
        <Carousel.Item>
          <img 
          className="d-block w-100"
          src={image.original}
          alt={image.orginalAlt}
          onClick={()=> console.log(image.original)}
          />
        </Carousel.Item>
      )
    })}
    </Carousel>
    </div>
  )
}

export default Images



