import React, { useState } from 'react'
import logo from "./../assets/logo.png"
import { AnimatePresence, motion } from "framer-motion"

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const menuVariation = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition:{
        delay : 0.5,
        duration: 0.5,
        ease : [0.22,1,0.36,1]
      }
    }
  }

  const itemVariation = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease : [0.37,0,0.63,1]
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
  const containerVar = {
    initial : {
      transition :{
        staggerChildren: 0.9,
        staggerDirection:-1,
      },
    },
    open:{
      transition :{
        delayChildren : 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  }

  const menus = <>
    <AnimatePresence>
      <motion.div variants={menuVariation}
        initial="initial" animate="animate" exit="exit" className='lg:hidden origin-top block absolute max-h-full h-full w-full left-0 top-0 right-0 bg-yellow-400 transition z-[3]'>
        <motion.div variants={containerVar} initial="initial" exit="initial" animate="open">
          <div className=' overflow-hidden'>
            <ul className=' text-center text-[25px] font-semibold w-full leading-8 p-20 my-24 uppercase'>
              <motion.li variants={itemVariation}   className='hover:rounded NavbarItems'>Home</motion.li>
              <motion.li variants={itemVariation}   className='hover:rounded NavbarItems'>Services</motion.li>
              <motion.li variants={itemVariation}  className='hover:rounded NavbarItems'>Dishes</motion.li>
              <motion.li variants={itemVariation} className='hover:rounded NavbarItems'>Special</motion.li>
              <motion.li variants={itemVariation}  className='hover:rounded NavbarItems'>Contact</motion.li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </>
  return (

    <nav>
      <div className=' h-10vh  flex justify-between z-50 text-black  md:px-10  flex-1'>
        <div className='flex items-center flex-1'>
          <img src={logo} className='w-[150px] md:w-[200px] z-[4] ' alt="" />
        </div>
        <div className=' sm:flex sm:flex-1 items-center justify-end font-normal hidden'>
          <div className=' flex-10 '>
            <ul className='lg:gap-10 sm:gap-5 md:mr-16 text-[16px] flex font-semibold'>
              <li>Home</li>
              <li>Services</li>
              <li>Dishes</li>
              <li>Special</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div>{click && menus}</div>
        <button className='sm:hidden block transition z-[3] text-red-600 px-4' onClick={handleClick}>
          {click ? <h3 className='font-semibold'>Close</h3> : <h3 className='font-semibold'>Menu</h3>}
        </button>
      </div>
    </nav>

  )
}

export default Header
