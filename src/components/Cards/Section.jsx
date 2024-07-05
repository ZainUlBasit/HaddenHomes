import React, { useState, useEffect, useRef } from "react";
import image from "/home.jpg"; // Ensure this path is correct

export default function Section({ onScrollComplete }) {
  const [scrollTop, setScrollTop] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [isMaximized, setIsMaximized] = useState(false);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      setScrollTop(scrollPos);
    };

    const handleResize = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setMaxScroll(docHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (scrollTop >= maxScroll) {
      setIsMaximized(true);
      onScrollComplete(true);
    } else {
      setIsMaximized(false);
      onScrollComplete(false);
    }
  }, [scrollTop, maxScroll, onScrollComplete]);

  const calculateSize = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const minHeight = viewportHeight * 0.7; // 80% of viewport height
    const minWidth = viewportWidth * 0.4; // 40% of viewport width
    const maxHeight = viewportHeight * 2.0; // 200% of viewport height
    const maxWidth = viewportWidth * 2.0; // 200% of viewport width

    if (scrollTop >= maxScroll) {
      return {
        width: `${maxWidth}px`,
        height: `${maxHeight}px`,
      };
    } else {
      const newHeight =
        minHeight + (maxHeight - minHeight) * (scrollTop / maxScroll);
      const newWidth =
        minWidth + (maxWidth - minWidth) * (scrollTop / maxScroll);

      return {
        width: `${newWidth}px`,
        height: `${newHeight}px`,
      };
    }
  };

  const { width, height } = calculateSize();

  const textStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height,
    width,
    transition: "width 0.5s ease, height 0.5s ease",
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
        className="relative z-10 text-center  pt-28 border-[#f0ede1] border-l-[2rem] border-r-[2rem] border-t-[2rem] rounded-t-full bg-opacity-100"
        style={textStyle}
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl  font-medium text-white">
          BUILD
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl  font-medium text-white">
          DESIGN
        </h1>
      </div>
    </div>
  );
}
