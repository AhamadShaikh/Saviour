import React from "react";
import logo from "../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col text-white font-sans font-bold text-2xl justify-center items-center mt-10 w-full xsm:space-y-4 md:space-y-10 h-screen">
      <div className="max-w-[200px]">
        <img src={logo} alt="" className="w-full" />
        <p className="text-[#FF002A] text-center">SITEMAP</p>
      </div>
      <div className="flex xsm:max-w-[100%] md:min-w-[60%] m-auto text-[10px] xsm:space-x-2 md:text-lg md:space-x-10">
        <a href="" className="hover:underline">
          home
        </a>
        <a href="" className="hover:underline">
          IDO
        </a>
        <a href="#Tokonomics" className="hover:underline">
          Tokonomics
        </a>
        <a href="#roadmap" className="hover:underline">
          Roadmap
        </a>
        <a href="#whitepaper" className="hover:underline">
          Whitepaper
        </a>
        <a href="" className="hover:underline">
          Pledge
        </a>
        <a href="" className="hover:underline">
          NFT
        </a>
        <a href="" className="hover:underline">
          Games
        </a>
      </div>
      <div className="flex space-x-4">
        <FaTwitter className="text-[#ED0137] hover:border hover:border-[#ED0137] w-10 h-10 p-2 rounded-full hover:cursor-pointer" />
        <FaTelegramPlane className="text-[#ED0137] hover:border hover:border-[#ED0137] w-10 h-10 p-2 rounded-full hover:cursor-pointer" />
        <MdEmail className="text-[#ED0137] hover:border hover:border-[#ED0137] w-10 h-10 p-2 rounded-full hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
