import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { ImSearch } from "react-icons/im"
import dessert from "/src/assets/dessert.jpg"
import chicken from "/src/assets/chicken.jpg"
import beef from "/src/assets/beef.jpg"
import mutton from "/src/assets/Mutton.jpg"
import snacks from "/src/assets/snacks.jpg"
import breakfast from "/src/assets/breakfast.jpg"
import seafood from "/src/assets/seafood.jpg"

function HeroBanner() {

    const foodItems = [
        {
            name: "Dessert",
            img: <img src={dessert} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Chicken",
            img: <img src={chicken} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Beef",
            img: <img src={beef} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Mutton",
            img:<img src={mutton} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Snacks",
            img: <img src={snacks} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Breakfast",
            img: <img src={breakfast} className=' w-full h-full object-cover rounded-full' alt="" />
        },
        {
            name: "Seafood",
            img:<img src={seafood} className=' w-full h-full object-cover rounded-full' alt="" />
        },

    ]
    return (
        <div className=' py-5 md:justify-between md:relative'>
            <div>
                <div className='mx-auto justify-between bg-slate-300 w-[80%] flex h-[30px] items-center px-2 rounded-md shadow-sm md:w-[40%] md:mx-10 md:absolute lg:mx-16 xl:h-[50px] xl:px-4 text-slate-600'>
                    <ImSearch className=' items-center text-[15px] xl:text-[20px]' />
                    <input type="text" placeholder='Search foods..' className=' outline-none border-none bg-transparent text-[12px] xl:text-[18px] items-center text-slate-700 ' />
                    <HiOutlineAdjustmentsHorizontal className=' xl:text-[20px]' />
                </div>
            </div>

            <div className=' py-3 md:absolute md:py-0 md:right-0 md:mx-8 lg:mx-16'>
                <ul className=' flex gap-3 overflow-x-auto scroll-smooth px-2 mx-auto justify-center xl:gap-5'>
                    {foodItems.map((item) => (
                        <li className=' gap-4'>
                            <div className=' items-center text-center justify-center justify-items-center flex flex-col'>
                                <div className=' flex h-[30px] xl:h-[45px] items-center bg-slate-300 rounded-full w-[30px] xl:w-[45px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                                    {item.img}
                                </div>
                                <h6 className=' text-[12px] font-semibold text-slate-600 xl:text-[15px] text-center items-center justify-center justify-items-center flex mx-auto'>{item.name}</h6>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeroBanner
