import React from "react";

const MeetTeamCard = () => {
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="relative flex flex-col justify-center items-center">
        <img src="/MarqueeImage.png" alt="not found" className="w-[350px]" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-8xl whitespace-nowrap p-4 font-montserrat font-[400]">
          Meet the team. meet the team
        </div>
      </div>
      <div className="font-montserrat font-[400] px-[40px] text-xl py-[50px] text-center">
        Your home is a canvas, and we are the artists. We blend functionality,
        aesthetics, and creativity to transform your space and ideas into
        remarkable outcomes. But we don't stop at design; we bring it to life
        through expert construction. Our integrated approach ensures that your
        vision is seamlessly translated into reality, without any compromises.
      </div>
    </div>
  );
};

export default MeetTeamCard;
