import React from 'react'
import { ImLocation2 } from "react-icons/im"
import { MdContactMail } from "react-icons/md"
import { BiSolidTimer } from "react-icons/bi"
import logo from "./../assets/logo.png"
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs"


function Footer() {

    return (
        <div>

            <section className='my-[200px] xs:my-[] sm:my-[400px] md:my-[130px] lg:my-[600px] md:relative'>
                <div className=' xs:mx-5'>
                    <img src={logo} className=' w-[150px] lg:w-[200px] mx-2' alt="" />
                </div>
                <div className=' xs:mx-5'>
                    <div className=' flex items-center mx-5 gap-2 lg:absolute lg:text-center lg:mx-[350px] lg:top-[35px]'>
                        <div className=' text-[40px] font-semibold text-red-700'><ImLocation2 /></div>
                        <div>
                            <h2 className=' text-[18px] font-semibold text-green-600'>Location</h2>
                        </div>
                    </div>
                    <div className=' mx-16 text-[13px] leading-[17px] lg:absolute lg:mx-[350px] lg:top-[90px]'><p>abc building, near st Thomas Church, Thrissur,kerala</p></div>

                    <div className=' flex items-center mx-5 gap-2'>
                        <div className=' text-[36px] font-semibold text-red-700'><MdContactMail /></div>
                        <div>
                            <h2 className=' text-[18px] font-semibold text-green-600'>Contact Us</h2>

                        </div>
                    </div>
                    <div className=' mx-16 text-[13px] leading-[17px]'><p>Ph : 7994117076 <span className=' block'>Email : amalkrishna1437@gmail.com</span></p></div>

                    <div className=' flex items-center mx-5 gap-2 md:absolute md:right-[100px] md:top-10'>
                        <div className=' text-[36px] font-semibold text-red-700
                        '><BiSolidTimer /></div>
                        <div>
                            <h2 className=' text-[18px] font-semibold text-green-600'>Timing</h2>

                        </div>
                    </div>
                    <div className=' mx-16 text-[13px] leading-[20px] md:absolute md:right-0 md:top-[90px]'>
                        <ul>
                            <li>Monday : 11am - 9pm</li>
                            <li>Tuesday : 11am - 9pm</li>
                            <li>Wednesday : Closed</li>
                            <li>Thursday : 11am - 9pm</li>
                            <li>Friday : 11am - 9pm</li>
                            <li>Saturday : 11am - 11pm</li>
                            <li>Sunday : 11am - 11pm</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className=' bg-yellow-200 items-start xxs:my-[-180px] sm:my-[-350px] md:my-[-100px] lg:my-[-550px]'>
                <div className=' py-10'>
                    <h1 className='text-center text-[25px]'>Be The First To Know!</h1>
                    <p className=' mx-10 md:w-[50%] md:my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat. In architecto, sapiente eaque ad natus dolorum perferendis nobis obcaecati non, iure facere molestias tempora repellendus officia rem unde id.</p>
                    <div className=' mx-auto justify-center text-center md:w-[50%] md:mr-0 md:mt-[-120px]'>
                        <input type="text" placeholder=' Name' className=' xxs:w-[250px] xs:w-[300px] my-2 w-[200px] h-[40px] rounded-2xl placeholder-padding text-[13px] md:w-[300px]'/>
                        <input type="email" placeholder=' Email' className=' xxs:w-[250px] xs:w-[300px] h-[40px] my-2 rounded-2xl placeholder-padding text-[13px] w-[200px] md:w-[300px]' />
                        <button className=' block mx-auto my-2 bg-red-600 py-1 px-8 rounded-2xl'>Subscribe</button>
                    </div>
                </div>
            </section>

            <section className=' bg-blue-900 xxs:my-[180px] sm:my-[350px] md:my-[80px] lg:my-[530px]'>
                <div>
                    <h6 className=' text-[13px] text-center py-2'>2022 Richy Foods. All Rights Reserved.</h6>
                    <div className=' text-center'>
                        <button className=' mr-2 font-semibold '><BsFacebook /></button>
                        <button className=' mr-2 font-semibold '><BsWhatsapp /></button>
                        <button className=' font-semibold'><BsInstagram /></button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer
