import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import  img3 from '../../assets/bridal.jpg'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import { useState } from 'react';


function Myhomebanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);}
  return (
    <div className='container my-4'>

    <Carousel fade activeIndex={index} onSelect={handleSelect} keyboard={false}data-bs-theme="dark" indicators={false} prevIcon={false} nextIcon={false}  >
      {/* carousel items to display */}
        <CarouselItem className='text-center h-100 w-100'  interval={5000}>
              <img src={img1} className=' rounded-3  img-fluid   ' style={{height:"auto", width:'50%'}}></img>

              <Carousel.Caption className='text-white'>
              <h3>Bridal Mehendi</h3>
              
              </Carousel.Caption>
        </CarouselItem >

        <CarouselItem className='text-center'  interval={5000}>
          <img className='img-fluid rounded-3' src={img2} style={{height:"auto", width:'30%'}}   ></img>
        </CarouselItem>
       
        <CarouselItem className='text-center'  interval={5200}>
          <img className='img-fluid rounded-3' src={img3} style={{height:"auto", width:'90%'}}  ></img>
        </CarouselItem>

    </Carousel>      
    </div>

  )
}

export default Myhomebanner