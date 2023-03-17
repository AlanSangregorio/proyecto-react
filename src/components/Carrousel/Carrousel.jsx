import Carousel from 'react-bootstrap/Carousel';
import "./carrousel.css"
import Banner from '../Banner/Banner';

function Carrousel(props) {
  return (

    <Carousel className='carrousel'>
      <Carousel.Item interval={2500}> 
      <Banner titleBanner="20% OFF" textBanner="En conjuntos de collar y correa" />      
      </Carousel.Item> 
      <Carousel.Item interval={2500}> 
      <Banner titleBanner="30% OFF" textBanner="En juguetes para perros y gatos" />     
      </Carousel.Item>
        
         
    </Carousel>
  );
}

export default Carrousel;