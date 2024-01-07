import React from 'react'

const AddToCart = ({isOpen, cartSliderClose}) => {
  return (
    <>
      <div className={ `left-0 top-0 right-0 bottom-0 fixed backdrop-blur-[8px] transition-all duration-500 w-full h-screen z-[600] ${isOpen ? ' opacity-100' : ' opacity-0'}`}>
        <div className={`absolute right-0 top-0 xxs:w-[80%] lg-[60%] xl:w-[40%] bg-[rgba(255,255,255,0.8)] h-full rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${isOpen ? ' translate-x-8 transition-all duration-300 ease-in-out' : ' translate-x-0' }`}>

        </div>
      </div>
    </>
  )
}

export default AddToCart
