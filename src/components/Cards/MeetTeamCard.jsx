import React from "react";
import { transform, useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";

const MeetTeamCard = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="relative flex flex-col justify-center items-center">
        <img src="/MarqueeImage.png" alt="not found" className="w-[350px]" />
        <motion.div className="absolute top-0 transform  text-8xl whitespace-nowrap p-4 font-montserrat font-[400]">
          Meet the team. meet the team
        </motion.div>
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
