import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../components/Banner/HomeBanner";
import IntroCards from "../../components/Cards/IntroCard";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HomeBanner />
      {/* changeable cards */}

      <IntroCards />
    </div>
  );
};

export default Home;
