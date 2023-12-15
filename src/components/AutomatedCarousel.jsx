import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "./../assets/img1.jpg"
import img2 from "./../assets/img2.jpg"
import img3 from "./../assets/img3.jpg"

function AutomatedCarousel() {
  return (
    <Carousel autoPlay  infiniteLoop showThumbs={false}>
        <div className=' w-[90%] mx-auto'>
            <img src={img1} className=' rounded-lg ' alt="" />
        </div>
        <div className=' w-[90%] mx-auto'>
            <img src={img2} alt="" className='rounded-lg' />
        </div>
        <div className=' w-[90%] mx-auto'>
            <img src={img3} alt="" className='rounded-lg' />
        </div>
    </Carousel>
  )
}

export default AutomatedCarousel
