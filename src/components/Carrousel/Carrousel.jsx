import Carousel from 'react-bootstrap/Carousel';
import "./carrousel.css"

function Carrousel(props) {
  return (

    <Carousel className='carrousel'>
      <Carousel.Item interval={2500}> 
      {props.children}       
      </Carousel.Item> 
      <Carousel.Item interval={2500}> 
      {props.children}       
      </Carousel.Item>
        
         
    </Carousel>
  );
}

export default Carrousel;