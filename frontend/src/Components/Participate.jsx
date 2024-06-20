import React from "react";
import bg3 from "../assets/bg3.png";
const Participate = () => {
  return (
    <div
      className="bg-cover bg-center xsm:min-h-[450px] md:min-h-[588px] m-0 px-2 text-white flex xsm:flex-col md:flex-row w-[100%] mt-6"
      style={{ backgroundImage: `url(${bg3})`, background: "0.3" }}
    >
      <div>
        
      </div>
      <div className="flex flex-col w-[100%] space-y-10">
        <p className="text-[#ED0137] xsm:text-2xl md:text-3xl text-center">
          Participate in our IDO Event!
        </p>

        <div className="flex xsm:flex-col md:flex-row w-[100%]">
          <div className="container1 relative xsm:max-w-[100%] md:w-[40%] flex flex-col items-center justify-around space-y-6">
            <p className="font-zoco bg-black max-w-[360px] rounded-lg p-4">
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </p>
            <div className="p-4 relative">
              <div className="bg-black font-zoco text-sm text-center border rounded-lg border-[#ED0137] p-8 leading-8">
                <button className="xsm:py-1 px-2 font-sans bg-[#ED0137] py-2 px-4 rounded-xl text-white absolute top-0 left-[38%]">
                  Token Info
                </button>
                <p className=" flex justify-between">
                  <span>Total token supply</span>
                  <span>20%</span>
                </p>
                <p className=" flex justify-between">
                  <span>Total token supply</span>
                  <span>20%</span>
                </p>
                <p>Recommended Referral Commission</p>
                <p className=" flex justify-between">
                  <span>Total token supply</span>
                  <span>20%</span>
                </p>
                <p className=" flex justify-between">
                  <span>Total token supply</span>
                  <span>20%</span>
                </p>
              </div>
            </div>
            <p className="text-[#ED0137] xsm:text-3xl text-center md:text-4xl">
              Become an affiliate & Earn 7% as Commission!
            </p>
            <div className="relative max-w-[350px]">
              <input
                type="text"
                placeholder="Generate a unique referral link"
                className="border border-[#ED0137] px-4 py-2 bg-black rounded-full mt-4 mb-6 w-full placeholder:text-[8px]"
              />
              <button className="xsm:py-1 px-2 font-sans bg-[#ED0137] py-1 px-2 rounded-xl text-white absolute top-[20px] left-[220px]">
                Generate
              </button>
            </div>
          </div>

          <div className="container2 font-zoco border border-[#ED0137] rounded-lg min-h-[738px] leading-8 text-center p-2 flex flex-col justify-center items-center xsm:max-w-[100%] md:w-[55%] bg-black">
            <p className="text-[#ED0137] xsm:text-2xl md:text-3xl text-center font-shojumaru">
              PRESALE 1
            </p>
            <p>1 Saviour = 0.657 USDT</p>
            <p>Next Stage Price = 0.723 USDT</p>
            <p>Sold - $34,56,56,764/$50,00,00,000</p>
            <p>Raised - $34,56,56,764/$40,00,00,000</p>
            <input
              type="text"
              placeholder="Enter the amount"
              className="border border-[#ED0137] px-4 bg-black rounded-full mt-4 mb-6"
            />
            <input
              type="text"
              placeholder="Enter the amount"
              className="border border-[#ED0137] px-4 bg-black rounded-full  mt-4 mb-6"
            />
            <input
              type="text"
              placeholder="Enter the amount"
              className="border border-[#ED0137] px-4 bg-black rounded-full mt-4"
            />
            <div className="mt-10 flex space-x-4 justify-center">
              <button className="font-sans bg-[#ED0137] px-4 rounded-xl text-white ">
                Buy
              </button>
              <button className="  font-sans bg-[#ED0137] px-4 rounded-xl text-white">
                Claim Drop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
