import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../components/Banner/HomeBanner";
import IntroCards from "../../components/Cards/IntroCard";
import ScrollerComponent from "../../components/Cards/ScrollTriggerCard";
import TextVelocityCard from "../../components/Cards/TextVelocityCard";
import Section from "../../components/Cards/Section";
import MeetTeamCard from "../../components/Cards/MeetTeamCard";
import CurvedCarousel from "../../components/Carousels/CurvedCarousel";
// import Section from "../../components/Cards/Section";

const Home = () => {
  const [isScrollCompleted, setIsScrollCompleted] = useState(false);

  const handleScrollComplete = (scrollCompleted) => {
    setIsScrollCompleted(scrollCompleted);
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Section onScrollComplete={handleScrollComplete} />
      <ScrollerComponent />
      <MeetTeamCard />
      <CurvedCarousel />
    </div>
  );
};

export default Home;
