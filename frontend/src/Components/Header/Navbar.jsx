import React from "react";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-around mr-2">
      <div className="flex items-center text-white space-x-1">
        <RxHamburgerMenu className="text-white text-2xl xsm:block md:hidden" />
        <div className="xsm:w-14 flex  md:w-24 bg-contain">
          <img src={logo} alt="" className="pt-4" />
        </div>
        <p className=" xsm:text-lg md:text-2xl">Saviour</p>
      </div>
      <div className="xsm:hidden md:block font-zoco md:flex bg-[#191818] text-white list-none rounded-2xl max-w-[583px]  border border-white h-14 space-x-6 text-center items-center px-16 m-auto">
        <a href="#home">Home</a>
        <a href="">IDO</a>
        <a href="">Tokonomics</a>
        <a href="">Roadmap</a>
        <a href="">Coming Soon</a>
      </div>
      <div className="flex justify-center items-center">
        <button className="xsm:py-1 px-2 font-sans bg-[#ED0137] py-2 px-4 rounded-xl text-white">
          Conntect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
