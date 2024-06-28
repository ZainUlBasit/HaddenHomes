import React from "react";
import { motion } from "framer-motion";

const SimpleCard = ({ panel, index }) => {
  const panelStyle = {
    backgroundImage: `url(${panel.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -1050 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="panel flex-shrink-0 h-[100vh] w-[100vw] bg-gray-200 flex border-[10px] border-white"
    >
      <div className="relative panel-content w-[70%] border-r-[10px] border-r-white bg-[#717353] text-white flex justify-center items-center flex-col">
        <div className="w-full p-[4rem] text-[10ch] font-[Montserrat] font-[400]">
          {panel.title}
        </div>
        <div className="flex flex-1 justify-center items-center w-[90%] text-3xl font-[300] font-[Montserrat]">
          {panel.description}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-[30%] h-full"
        style={panelStyle}
      ></motion.div>
    </motion.div>
  );
};

export default SimpleCard;
