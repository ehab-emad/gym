import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import lolog from '../../images/lolog.jpg'
import logo2 from '../../images/logo2.jpg'
import putt from '../../images/putt.jpg'




function Sliderhome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  className='my-2 mmm' activeIndex={index} onSelect={handleSelect}>
    
   
      <Carousel.Item className='slider-bg1 '>
       
      <div className='d-flex flex-row justify-content-center align-items-center ' style={{height:"100%"}}><img className='img-slider' src={lolog} style={{width:"100%" ,height:"100%"}}
      alt='second slide'></img>
      
    </div>
      </Carousel.Item>
      <Carousel.Item className='slider-bg1 '>
       
       <div className='d-flex flex-row justify-content-center align-items-center 'style={{height:"100%"}}><img className='img-slider' src={logo2} style={{width:"100%" ,height:"100%"}}
       alt='second slide'></img>
      
     </div>
       </Carousel.Item>
       {/* <Carousel.Item className='slider-bg1 '>
       
       <div className='d-flex flex-row justify-content-center align-items-center 'style={{height:"100%"}}><img className='img-slider' src={putt} style={{width:"100%" ,height:"100%"}}
       alt='second slide'></img>
      
     </div>
       </Carousel.Item>
      */}
      
    </Carousel>
  );
}

export default Sliderhome;