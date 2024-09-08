import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import lolog from '../../images/lolog.jpg'
import dryy from '../../images/dryy.jpg'
import putt from '../../images/putt.jpg'




function Sliderhome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  className='my-2 mmm' activeIndex={index} onSelect={handleSelect}>
    
    {/* <Carousel.Item className='slider-bg2 '>
      <div className='d-flex flex-row justify-content-center align-items-center'>    <img src={eeee} style={{height:"296px",width:"50%" , objectFit:'cover',borderRadius:"20px", margin:"10px "}}
              alt='third slide'></img>
<div  className=' mx-5 text-center' style={{width:"50%"}}>
<h3 className='ask'>اسال علي  خصم  كورس التنشيف !</h3>
        
        </div></div>
      </Carousel.Item> */}
      <Carousel.Item className='slider-bg1 '>
       
      <div className='d-flex flex-row justify-content-center align-items-center ' style={{height:"100%"}}><img className='img-slider' src={lolog} style={{width:"100%" ,height:"100%"}}
      alt='second slide'></img>
      {/* <div className=' mx-5 text-center'>     <h3 className='fs-5'>  معانا متشلش هم فورمتك</h3>
          <p className='fs-4'>    </p></div> */}
    </div>
      </Carousel.Item>
      <Carousel.Item className='slider-bg1 '>
       
       <div className='d-flex flex-row justify-content-center align-items-center 'style={{height:"100%"}}><img className='img-slider' src={dryy} style={{width:"100%" ,height:"100%"}}
       alt='second slide'></img>
       {/* <div className=' mx-5 text-center'>     <h3 className='fs-5'>  معانا متشلش هم فورمتك</h3>
           <p className='fs-4'>    </p></div> */}
     </div>
       </Carousel.Item>
       <Carousel.Item className='slider-bg1 '>
       
       <div className='d-flex flex-row justify-content-center align-items-center 'style={{height:"100%"}}><img className='img-slider' src={putt} style={{width:"100%" ,height:"100%"}}
       alt='second slide'></img>
       {/* <div className=' mx-5 text-center'>     <h3 className='fs-5'>  معانا متشلش هم فورمتك</h3>
           <p className='fs-4'>    </p></div> */}
     </div>
       </Carousel.Item>
     
      {/* <Carousel.Item className='slider-bg2 '>
      <div className='d-flex flex-row justify-content-center align-items-center'>    <img src={dry} style={{height:"296px", width:"50%", objectFit:'cover',borderRadius:"20px", margin:"10px "}}
              alt='third slide'></img>
<div  className=' mx-5 text-center 'style={{width:"50%"}}>
<h3 className='ask'>اسال علي  خصم  كورس التنشيف !</h3>
        
        </div></div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Sliderhome;