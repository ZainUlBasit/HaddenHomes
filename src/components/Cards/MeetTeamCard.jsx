import { motion } from "framer-motion";

const MeetTeamCard = () => {
  return (
    <div className="w-[100vw] h-screen flex flex-col justify-center  overflow-hidden">
      <div className="relative flex flex-col justify-center items-center">
        <div className="h-[50vh] w-[100vw] px-12 flex justify-center">
          <motion.img
            initial={{ opacity: 0, width: 450 }}
            whileInView={{ opacity: 1, width: "100%" }}
            transition={{ duration: 3 }}
            src="/MarqueeImage.png"
            alt="not found"
            className="h-[300px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -170 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 transform  text-8xl whitespace-nowrap p-4 font-montserrat font-[400]"
        >
          Meet the team
        </motion.div>
        <div className="font-montserrat font-[400] px-[40px] text-xl py-[50px] text-center">
          Your home is a canvas, and we are the artists. We blend functionality,
          aesthetics, and creativity to transform your space and ideas into
          remarkable outcomes. But we don't stop at design; we bring it to life
          through expert construction. Our integrated approach ensures that your
          vision is seamlessly translated into reality, without any compromises.
        </div>
      </div>
    </div>
  );
};

export default MeetTeamCard;
