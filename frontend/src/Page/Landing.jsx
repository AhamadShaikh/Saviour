import React from "react";
import Header from "../Components/Header/Header";
import Introduction from "../Components/Introduction";
import Participate from "../Components/Participate";

const Landing = () => {
  return (
    <div className="font-shojumaru">
      <Header />
      <Introduction />
      <Participate/>
    </div>
  );
};

export default Landing;
