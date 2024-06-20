import React from "react";
import logo from "../assets/logo.png";

const roadmapData = [
  {
    id: 1,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 7,
    image: logo,
    phase: "Phase1",
    content: "Lorem ipsum dolor sit amet.",
  },
];

const Roadmap = () => {
  return (
    <div className="flex justify-center bg-black text-white font-sans xsm:flex-col items-center mt-6">
      <p className="text-[#ED0137] font-shojumaru text-4xl text-center mb-10">Roadmap</p>
      <div className="carousel rounded-box xsm:w-64 md:w-[80%] gap-4 overflow-hidden m-6">
        {roadmapData?.map((ele, ind) => (
          <div key={ele.id} className="border border-[#ED0137] rounded-2xl text-left xsm:w-full md:w-[23%] relative carousel-item">
            <div
              className="bg-cover bg-center min-h-[260px] m-0 px-4 w-full"
              style={{
                backgroundImage: `url(${ele.image})`,
                background: "0.3",
                opacity: "0.6",
              }}
            ></div>
            <div className="absolute top-32 p-4">
              <p className="font-bold text-xl">{ele.phase}</p>
              <p>{ele.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
