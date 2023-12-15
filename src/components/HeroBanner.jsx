import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { ImSearch } from "react-icons/im"

function HeroBanner() {

    const foodItems = [
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },
        {
            name: "Steak",
            img: ""
        },

    ]
    return (
        <div className=' py-5 md:justify-between md:relative'>
            <div>
                <div className='mx-auto justify-between bg-slate-300 w-[80%] flex h-[30px] items-center px-2 rounded-md shadow-sm md:w-[40%] md:mx-10 md:absolute lg:mx-16 xl:h-[50px] xl:px-4'>
                    <ImSearch className=' items-center text-[15px] xl:text-[20px]' />
                    <input type="text" placeholder='Search foods..' className=' outline-none border-none bg-transparent text-[12px] xl:text-[18px] items-center ' />
                    <HiOutlineAdjustmentsHorizontal className=' xl:text-[20px]' />
                </div>
            </div>

            <div className=' py-3 md:absolute md:py-0 md:right-0 md:mx-8 lg:mx-16'>
                <ul className=' flex gap-3 overflow-x-auto scroll-smooth px-2 mx-auto justify-center xl:gap-5'>
                    {foodItems.map((item) => (
                        <li className=' gap-4'>
                            <div>
                                <div className=' flex h-[30px] xl:h-[45px] items-center bg-slate-300 rounded-full w-[30px] xl:w-[45px]'>
                                    <img src={item.img} className=' items-center' alt="" />
                                </div>
                                <h6 className=' text-[12px] xl:text-[15px]'>{item.name}</h6>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HeroBanner
