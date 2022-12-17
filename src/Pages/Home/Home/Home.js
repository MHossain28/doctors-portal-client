import React from "react";
import Banner from "../Banner/Banner";
import ExceptionalBanner from "../ExceptionalBanner/ExceptionalBanner";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExceptionalBanner></ExceptionalBanner>
      <MakeAppoinment></MakeAppoinment>
    </div>
  );
};

export default Home;
