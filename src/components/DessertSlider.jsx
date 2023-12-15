import React from 'react'
import des1 from "./../assets/des1.jpg"
import des2 from "./../assets/des2.jpg"
import des3 from "./../assets/des3.jpg"
import des4 from "./../assets/des4.jpg"
import des5 from "./../assets/des5.jpg"
import des6 from "./../assets/des6.jpg"
import des7 from "./../assets/des7.jpg"
import des8 from "./../assets/des8.jpg"
import des9 from "./../assets/des9.jpg"
import des10 from "./../assets/des10.jpg"
import des11 from "./../assets/des11.jpg"
import des12 from "./../assets/des12.jpg"
import des13 from "./../assets/des13.jpg"



function DessertSlider() {
   
    return (
        <div>
            <div className=' mx-5  my-[-150px] sm:my-[-380px] md:my-[-100px] lg:my-[-550px]'>
                <h1 className=' text-[18px] font-semibold '>Dessert Items</h1>
                <div className=' my-2 relative overflow-x-auto'>
                    <ul className=' flex overflow-x-auto gap-3 slider-track'>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des1} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des2} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des3} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des4} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des5} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des6} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des7} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des8} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des9} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des10} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des11} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des12} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>
                            <li>
                                <div className=' w-[100px]  h-[80px] rounded-2xl'>
                                    <img src={des13} className=' w-full h-full object-cover rounded-2xl' alt="" />
                                    
                                </div>
                            </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DessertSlider
