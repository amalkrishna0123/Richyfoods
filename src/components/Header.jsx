import React, { useContext, useState } from "react";
import logo from "./../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import shoppingBag from "/src/assets/shoppingbag.png";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AddtoCartManage } from "./AddToCartContext";
import { LuChevronsRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);
  const [isOpen, setIsIsOpen] = useState(false);
  const { addToCartItem } = useContext(AddtoCartManage);
  const navigate = useNavigate()

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
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariation = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const containerVar = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const cartSliderOpen = () => {
    setIsIsOpen(true);
  };

  const cartSliderClose = () => {
    setIsIsOpen(false);
  };

  // AddToCart Function

  const AddToCartResults = addToCartItem.map((item) => {
    return (
      <div>
        <div className=" bg-slate-700 w-[200px] h-[250px] rounded-lg flex justify-center items-center justify-items-center mx-auto  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <img
            src={item.img}
            alt=""
            className=" w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className=" flex justify-center items-center justify-items-center mx-auto ">
          <h3 className=" text-slate-700">{item.title}</h3>
        </div>
      </div>
    );
  });

  const menus = (
    <>
      <AnimatePresence>
        <motion.div
          variants={menuVariation}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:hidden origin-top block absolute max-h-full h-full w-full left-0 top-0 right-0 bg-yellow-400 transition z-[3]"
        >
          <motion.div
            variants={containerVar}
            initial="initial"
            exit="initial"
            animate="open"
          >
            <div className=" overflow-hidden">
              <ul className=" text-center text-[25px] font-semibold w-full leading-8 p-20 my-24 uppercase">
                <motion.li
                  variants={itemVariation}
                  className="hover:rounded NavbarItems cursor-pointer"
                >
                 <Link className=" NavbarItems" to="/"> Home</Link>
                </motion.li>
                <motion.li
                  variants={itemVariation}
                  className="hover:rounded NavbarItems"
                >
                  Services
                </motion.li>
                <motion.li
                  variants={itemVariation}
                  className="hover:rounded NavbarItems"
                >
                  Dishes
                </motion.li>
                <motion.li
                  variants={itemVariation}
                  className="hover:rounded NavbarItems"
                >
                  Special
                </motion.li>
                <motion.li
                  variants={itemVariation}
                  className="hover:rounded NavbarItems"
                >
                  Contact
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
  return (
    <nav className="">
      <div className=" h-10vh  flex justify-between z-50 text-black  md:px-10  flex-1 ">
        <div className="flex items-center flex-1">
          <img src={logo} className="w-[150px] md:w-[200px] z-[4] " alt="" />
        </div>
        <div className=" sm:flex sm:flex-1 items-center justify-end font-normal hidden">
          <div className=" flex-10 ">
            <ul className="lg:gap-10 sm:gap-5 md:mr-16 text-[16px] flex font-semibold">
              <li className=" cursor-pointer"><Link to="/">Home</Link></li>
              <li>Services</li>
              <li>Dishes</li>
              <li>Special</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <button className=" mr-4 text-blue-400 cursor-pointer" onClick={()=>navigate('/checkout')}>
          <BsFillBookmarkCheckFill />
        </button>
        <div className=" items-center justify-center justify-items-center text-center flex xxs:text-[20px] text-green-400 font-bold">
          <button onClick={cartSliderOpen} className="cursor-pointer">
            <HiShoppingCart />
          </button>
          {isOpen && (
            <div
              className={`fixed top-0 right-0 left-0 bottom-0 backdrop-blur-[8px] w-full opacity-100 z-[600] transition-all duration-500 ${
                isOpen
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible translate-x-8"
              }`}
            >
              <div
                className={`absolute xxs:w-[80%] sm:w-[60%] lg:w-[40%] xl:w-[40%] h-full bg-[rgba(255,255,255,0.6)] right-0 rounded-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all duration-500 ${
                  isOpen
                    ? " opacity-100 visible translate-x-0"
                    : " opacity-0 invisible translate-x-8"
                }`}
              ></div>
            </div>
          )}
          {isOpen ? (
            <div className=" text-center justify-center justify-items-center items-center mx-auto z-[650]">
              <h5 className=" absolute left-32 font-semibold top-7 text-[15px] flex items-center gap-1 text-slate-600">
                Your Cart History <LuChevronsRight className=" text-[17px]" />{" "}
              </h5>
              <IoIosCloseCircle
                className="absolute right-10 text-[22px] text-red-500 top-5 z-[700]"
                onClick={cartSliderClose}
              />
              {addToCartItem ? (
                <div className=" absolute right-28 top-28  flex justify-center items-center justify-items-center mx-auto text-center flex-col">
                  {AddToCartResults}
                </div>
              ) : (
                <div className="z-[650] absolute justify-center items-center justify-items-center text-center mx-auto my-auto m-auto overflow-hidden w-[250px] right-10 h-auto">
                  <img
                    src={shoppingBag}
                    alt=""
                    className="items-center justify-center justify-items-center text-center"
                  />
                  <h2 className=" text-violet-600 text-[18px]">
                    ( No items found in the cart )
                  </h2>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div>{click && menus}</div>
        <button
          className="sm:hidden block transition z-[3] text-red-600 px-4"
          onClick={handleClick}
        >
          {click ? (
            <h3 className="font-semibold">Close</h3>
          ) : (
            <h3 className="font-semibold">Menu</h3>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
