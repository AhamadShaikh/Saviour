import React from "react";
import Header from "../Components/Header/Header";
import Introduction from "../Components/Introduction";
import Participate from "../Components/Participate";
import Tokonomics from "../Components/Tokonomics";
import Roadmap from "../Components/Roadmap";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div className="font-shojumaru">
      <Header />
      <Introduction />
      <Participate/>
      <Tokonomics/>
      <Roadmap/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Landing;
