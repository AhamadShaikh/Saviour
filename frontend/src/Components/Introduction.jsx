import React from "react";
import bg2 from "../assets/bg2.png";

const Introduction = () => {
  return (
    <div className="flex xsm:flex-col md:flex-row text-white">
      <div className="md:w-[40%] flex flex-col space-y-8 items-center text-center justify-center">
        <p className="text-[#ED0137] text-4xl">Introduction</p>
        <p className="font-zoco">
          We've all been in the mud once, and now we've decided to fight it out.
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future! Our mission is to empower everyone to share wealth
          and succeed. read more...
        </p>
        <button className="xsm:py-1 px-2 font-sans bg-[#ED0137] py-2 px-4 rounded-xl text-white">
          connect wallet
        </button>
      </div>
      <div className="max-w-[795px]">
        <img src={bg2} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
