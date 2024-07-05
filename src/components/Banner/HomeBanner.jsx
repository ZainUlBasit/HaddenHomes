import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "/home.jpg"; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

export default function HomeBanner({ onScrollComplete }) {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const minHeight = window.innerHeight * 0.7; // 70% of viewport height
    const minWidth = window.innerWidth * 0.4; // 40% of viewport width
    const maxHeight = window.innerHeight * 2.0; // 200% of viewport height
    const maxWidth = window.innerWidth * 2.0; // 200% of viewport width

    ScrollTrigger.create({
      trigger: textContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;

        const newHeight = minHeight + (maxHeight - minHeight) * progress;
        const newWidth = minWidth + (maxWidth - minWidth) * progress;

        gsap.to(textContainerRef.current, {
          width: newWidth,
          height: newHeight,
          duration: 0.1,
          ease: "none",
        });

        if (self.progress >= 1) {
          onScrollComplete(true);
        } else {
          onScrollComplete(false);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onScrollComplete]);

  const textStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "width 0.1s ease, height 0.1s ease",
  };

  return (
    <div className="relative flex flex-col items-center justify-end h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Design Build"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#FFFEF9]"></div>
      <div
        ref={textContainerRef}
        className="relative z-10 text-center pt-28 border-[#f0ede1] border-l-[2rem] border-r-[2rem] border-t-[2rem] rounded-t-full bg-opacity-100"
        style={textStyle}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white">
          BUILD
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white">
          DESIGN
        </h1>
      </div>
    </div>
  );
}
