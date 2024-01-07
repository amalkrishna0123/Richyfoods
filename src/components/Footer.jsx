import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdContactMail } from "react-icons/md";
import { BiSolidTimer } from "react-icons/bi";
import logo from "./../assets/logo.png";
import { BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className=" bg-slate-300 w-full h-auto p-6">
        <div className=" xl:max-w-[1024px] justify-center justify-items-center items-center mx-auto flex flex-col">
          <div className=" flex justify-center item-left justify-items-center mx-auto gap-3">
            {/* First */}
            <div className=" flex flex-col gap-3">
                <h3 className=" font-semibold text-red-500">ABOUT RICHYFOODS</h3>
                <ul className="flex flex-col text-[12px] text-slate-500">
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investores</li>
                    <li>Purpose</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            {/* Second */}
            <div className="flex flex-col gap-3">
            <h3 className=" font-semibold text-red-500">GET HELP</h3>
                <ul className=" flex flex-col text-[12px] text-slate-500">
                    <li>Order Status</li>
                    <li>Shipping & Delivery</li>
                    <li>Payment OPtions</li>
                    <li>Git Card Balance</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
            {/* Third */}
            <div className="flex flex-col gap-3">
            <h3 className=" font-semibold text-red-500">COMPANY</h3>
                <ul className="flex flex-col text-[12px] text-slate-500">
                    <li>GIft Cards</li>
                    <li>Promotions</li>
                    <li>Find A store</li>
                    <li>SignUp</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>
          </div>
          <div className=" text-center xxs:text-[13px] text-red-500">
            <p>Copyright <span className=" font-extrabold text-[15px]">©</span> All Reserved Rights AK Creative Design 2023-24</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
