import React from "react";
import img1 from "../assets/img1.png";

const Faq = () => {
  return (
    <div className="flex xsm:flex-col md:flex-row text-white mx-4 text-sm md:text-lg md:space-x-28">
      <div className="max-w-[503px]">
        <img src={img1} alt="" className="w-full"/>
      </div>
      <div className=" flex flex-col space-y-10">
        <p className="text-[#ED0137] font-shojumaru text-4xl text-center mt-6">
          FAQ
        </p>
        <p className="border border-[#ED0137] rounded-full py-4 px-4 flex space-x-10 pl-6">
          <span>1</span>
          <span>Why choose "Savior"?</span>
        </p>
        <p className="border border-[#ED0137] rounded-full py-4 px-4 flex space-x-10 pl-6">
          <span>2</span>
          <span>Why is the IDO duration so long?</span>
        </p>
        <p className="border border-[#ED0137] rounded-full py-4 px-4 flex space-x-10 pl-6">
          <span>3</span>
          <span>When will trading go live?</span>
        </p>
        <p className="border border-[#ED0137] rounded-full py-4 px-4 flex space-x-10 pl-6">
          <span>4</span>
          <span>When can we claim the tokens?</span>
        </p>
      </div>
    </div>
  );
};

export default Faq;
