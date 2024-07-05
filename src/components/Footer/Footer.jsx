import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-[100px] gap-x-[100px] flex-wrap py-8">
        <div className="font-bold font-montserrat text-2xl">FOLLOW US ON</div>
        <div className="flex">
          <img className="w-[72.3px] h-[72.3px]" src="/Facebook.png" alt="fb" />
          <img
            className="w-[72.3px] h-[72.3px]"
            src="/Instagram.png"
            alt="insta"
          />
        </div>
        <div className="font-[400] font-montserrat text-2xl">
          Let’s connect on Socials !
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap px-[50px] py-8">
        <div className="flex w-[60%] gap-x-3">
          <img src="/logo.png" alt="logo" className="w-[92px]" />
          <div className="font-montserrat font-[400] text-[4ch]">
            Have Questions? Reach out to us anytime.
          </div>
        </div>
        <div className="w-[20%]">
          <button className="bg-[#444442] text-white px-3 py-2">
            Connect with us today
          </button>
        </div>
      </div>
      <div className="">Let’s connect over the socials</div>
      <FaFacebook />
      <FaInstagram />
    </div>
  );
};

export default Footer;
