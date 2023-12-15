import React from 'react'
import herobanner from "./../assets/heroimg.png"
import chef from "./../assets/chef.jpg"
import food1 from "./../assets/food1.png"

function CoockingQuote() {
  return (
   <>
    <div className=' grid grid-cols-1 md:grid-cols-2 mx-10 my-5  h-full relative'>
      <div className=' h-auto w-[400px] items-center justify-items-center mx-auto'>
        <img src={herobanner} alt="" />
      </div>
      <div className=' absolute bottom-0'>
        <h1 className=' text-[55px] font-semibold leading-[55px] opacity-70 '><span className='text-slate-200 bg-slate-600'>Savor The Moment,</span> <span className=' bg-black text-teal-200'>Include Your Sensesculinary</span> <span className=' bg-red-700'>Adventures await</span></h1>
        <p></p>
      </div>
    </div>

    <div className=' h-full relative grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <img src={chef} className=' mix-blend-multiply' alt="" />
      </div>
      <div className=' absolute bottom-0 mx-10'>
        <h1 className=' text-[55px] font-semibold leading-[55px] text-slate-300 opacity-70'><span className=' bg-orange-500'>Elevate Your</span> <span className=' bg-yellow-300 text-white'>Taste Journey </span><span className=' bg-green-500'>With Flavours </span><span className=' bg-blue-500'>Crafted By </span><span className='bg-purple-600'>Culinary Maestros</span></h1>
      </div>
    </div>

    <div>
      <div>
        <img src={food1} className=' rotate-img' alt="" />
      </div>
      <div>
        <h1></h1>
      </div>
    </div>
   </>
  )
}

export default CoockingQuote
