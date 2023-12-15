import React from 'react'
import { GrDeliver } from "react-icons/gr"
import { BsCurrencyRupee } from "react-icons/bs"
import burger2 from "./../assets/burger2.jpg"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "tailwindcss/tailwind.css"

function OrganicFood() {
  const CardCarousel = [
    {
      img: "src/assets/burger2.jpg",
      name: "Herb Crust Salmon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "90"
    },
    {
      img: "src/assets/burger1.jpg",
      name: "Herb Crust Salmon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "90"
    },
    {
      img: "src/assets/burger3.jpg",
      name: "Herb Crust Salmon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "90"
    },
    {
      img: "src/assets/burger2.jpg",
      name: "Herb Crust Salmon",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "90"
    },
  ]
  return (
    <div className=' my-40 w-full h-[300px] bg-gradient-to-t from-transparent to-[#f0fdf8e5] bg-[#88848436] xs:my-[230px] sm:my-[400px] md:my-[150px] lg:my-[600px]'>
      <div className=' py-10'>
        <h1 className=' font-semibold mx-8 text-[18px]'>Junk Foods</h1>

        {/* Mobile Carousel */}
        <div className="mobile-carousel">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            centerMode={true}
            useKeyboardArrows={true}
            autoPlay={true}
            stopOnHover={true}
            interval={3000}
            centerSlidePercentage={80}
          >
            {CardCarousel.map((item, index) => (


              <div className='flex overflow-x-auto mx-4'>
                <div className=' mt-2 mx-auto bg-white shadow-lg rounded-xl max-w-full w-full mr-4  overflow-hidden h-[150px] relative'>
                  <div className=' bg-slate-700 w-[30%] rounded-xl absolute h-[100px] my-6 mx-1 xxs:mx-3'>
                    <img src={item.img} className=' rounded-xl w-full h-full object-cover' alt="" />
                  </div>
                  <div className=' w-[60%]  absolute right-0 xs:w-[55%]'>
                    <div className=''>
                      <div className=' text-[14px] xs:text-[16px] mx-0 font-semibold flex my-2 items-center bg-yellow-200 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-9 xs:w-11 text-green-600 rounded-xl'>
                        <BsCurrencyRupee />
                        <h3>{item.price}</h3>
                      </div>
                    </div>
                    <div className=' xxs:mx-auto'>
                      <h1 className=' font-semibold my-5 xxs:text-[16px] xs:text-[18px] xs:my-3'>{item.name}</h1>
                      <p className=' text-[9px] leading-[12px] my-[-20px] xxs:w-[130px] text-center '>{item.desc}</p>
                    </div>
                    <div className=' text-[10px] mx-0 my-10 flex items-center w-[130px] xs:w-[140px] rounded-xl bg-orange-400 font-semibold xxs:my-7 xxs:w-[110px] xs:my-7 xs:text-[12px]'>
                      <GrDeliver className=' mx-2 text-green-600 font-semibold' />
                      <h4 className=' tracking-tighter '>Delivery Available</h4>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </Carousel>
        </div>


        {/* Desktop Carousel */}
        <div className="desktop-carousel">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            centerMode={true}
            useKeyboardArrows={true}
            autoPlay={true}
            stopOnHover={true}
            interval={3000}
            centerSlidePercentage={50}
          >
            {CardCarousel.map((item, index) => (


              <div className='flex overflow-x-auto overflow-hidden'>
                <div className=' mt-2 mx-auto bg-white shadow-lg rounded-xl max-w-full w-full mr-4 h-[150px] relative'>
                  <div className=' bg-slate-700 w-[30%] rounded-xl absolute h-[100px] my-6 mx-1 xxs:mx-3'>
                    <img src={item.img} className=' rounded-xl w-full h-full object-cover' alt="" />
                  </div>
                  <div className=' w-[60%]  absolute right-0 xs:w-[55%]'>
                    <div className=''>
                      <div className=' text-[14px] xs:text-[16px] mx-0 font-semibold flex my-2 items-center bg-yellow-200 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] w-9 xs:w-11 text-green-600 rounded-xl'>
                        <BsCurrencyRupee />
                        <h3>{item.price}</h3>
                      </div>
                    </div>
                    <div className=' xxs:mx-auto'>
                      <h1 className=' font-semibold my-5 xs:text-[18px] sm:my-4 sm:leading-[15px]'>{item.name}</h1>
                      <p className=' text-[11px] leading-[12px] my-[-20px] xxs:w-[150px] text-center sm:my-[-10px]'>{item.desc}</p>
                    </div>
                    <div className=' text-[12px] mx-0 my-10 flex items-center w-[130px] xs:w-[140px] rounded-xl bg-orange-400 font-semibold sm:my-5 sm:w-[130px]'>
                      <GrDeliver className=' mx-2 text-green-600 font-semibold' />
                      <h4 className=' tracking-tighter '>Delivery Available</h4>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </Carousel>
        </div>

      </div>

    </div>
  )
}

export default OrganicFood
