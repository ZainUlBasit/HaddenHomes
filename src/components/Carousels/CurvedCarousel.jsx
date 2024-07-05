import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function CurvedCarousel() {
  const ref = useRef();
  const boxWidth = 1200;
  const next = () => {
    var wrapWidth = (ref.current.children.length - 1) * boxWidth;
    gsap.to(ref.current.children, {
      x: "-=" + boxWidth,
      duration: 1,
      modifiers: {
        x: function (x, target) {
          //x = parseFloat(x) % 1200;
          x = gsap.utils.wrap(-boxWidth, wrapWidth, parseInt(x));
          return x + "px";
        },
      },
    });
  };
  const prev = () => {
    gsap.to(ref.current.children, {
      x: "+=1200",
    });
  };

  useEffect(() => {
    gsap.set(ref.current.children, {
      x: (x) => x * 1200,
    });
  }, []);

  return (
    <div className="flex flex-col h-[100vh] w-full bg-[#717353] rounded-tl-[350px] overflow-hidden">
      <div className="font-montserrat font-[400] text-[70px] py-8 pt-[100px] text-white px-[170px] flex flex-wrap w-full text-center">
        Hear From Our Happy Homeowners
      </div>
      <div className="App relative">
        <div className="container" ref={ref}>
          <div className="box">
            <img
              src="/CurvedCarouselImage.png"
              alt="not found"
              className="w-full"
            />
          </div>
          <div className="box">
            <img
              src="/CurvedCarouselImage.png"
              alt="not found"
              className="w-full"
            />
          </div>
          <div className="box">
            <img
              src="/CurvedCarouselImage.png"
              alt="not found"
              className="w-full"
            />
          </div>
        </div>

        <div className="buttons absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] flex justify-between items-center">
          <button
            onClick={() => prev()}
            className="px-2 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#717353] transition-all ease-in-out duration-500"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <button
            onClick={() => next()}
            className="px-2 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#717353] transition-all ease-in-out duration-500"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
