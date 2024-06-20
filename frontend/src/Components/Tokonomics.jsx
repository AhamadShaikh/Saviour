import React from "react";
import bg4 from "../assets/bg4.png";
import logo from "../assets/logo.png";

const Tokonomics = () => {
  return (
    <div
      className="bg-cover bg-center xsm:min-h-[450px] md:min-h-[588px] m-0 px-2 text-white w-[100%] mt-6"
      style={{ backgroundImage: `url(${bg4})`, background: "0.3" }}
    >
      <p className="text-[#ED0137] text-4xl text-center mt-6">
        Tokonomics
      </p>
      <div className="flex xsm:flex-col md:flex-row w-full mt-10">
        <div className="relative xsm:w-[100%] md:w-[40%] p-4">
          <div className="bg-black rounded-lg p-4 w- border border-[#ED0137] min-h-[307px] max-w-[412px]">
            <button className="xsm:py-1 px-2 font-sans bg-[#ED0137] py-4 px-4 rounded-xl text-white top-0 xsm:left-[38%] md:left-[32%] absolute">
              Token Info
            </button>
            <div className="font-zoco flex flex-col justify-around min-h-[307px] max-w-full px-10">
              <p className=" flex justify-between text-left">
                <span>Name</span>
                <span className="text-[#ED0137]">20%</span>
              </p>
              <p className=" flex justify-between">
                <span>Symbol</span>
                <span className="text-[#ED0137]">20%</span>
              </p>
              <p className=" flex justify-between">
                <span>Total supply</span>
                <span className="text-[#ED0137]">20%</span>
              </p>
              <p className=" flex justify-between">
                <span>Decimals</span>
                <span className="text-[#ED0137]">20%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] flex justify-center items-center h-full">
          <img src={logo} alt="" className="max-w-[278px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Tokonomics;
