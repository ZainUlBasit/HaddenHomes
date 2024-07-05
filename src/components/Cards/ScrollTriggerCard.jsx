import React from "react";
// import { TweenMax, Power3, Power4 } from "gsap";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";

gsap.registerPlugin(ScrollTrigger);

function ScrollerComponent() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        // markers: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <React.Fragment>
      <Box className="gallery" sx={{ display: "flex", bgcolor: "#717353" }}>
        <Box
          className="left"
          sx={{
            width: "50%",
            marginLeft: "auto",
            "& .details": {
              border: "10px solid white",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              position: "relative",
              //   marginLeft: "auto",
              color: "#fff",
              //   fontSize: "3rem",
              //   fontWeight: 900,
            },
          }}
        >
          {[
            {
              title: "New Builds",
              description:
                "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
              image: "1.png",
            },
            {
              title: "Renovations",
              description:
                "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
              image: "2.png",
            },
            {
              title: "Airbnb's",
              description:
                "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
              image: "3.png",
            },
          ].map((panel, index) => (
            <Box className="details">
              <div className="w-full px-3 pl-[70px] text-[8ch] font-[Montserrat] font-[400] relative z-2">
                <div className="absolute -top-2 left-7 font-[300] text-[1.8ch] opacity-[11%] -z-1">
                  {index + 1}.
                </div>
                {panel.title}
              </div>
              <div className="flex justify-center w-full text-justify  px-8 items-center text-2xl font-[300] font-[Montserrat]">
                {panel.description}
              </div>
            </Box>
          ))}
        </Box>
        <Box
          className="rightblock"
          sx={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              borderRight: "10px solid white",
              borderTop: "10px solid white",
              borderBottom: "10px solid white",
              "& .photo": {
                position: "absolute",
                width: "100%",
                height: "100%",
                "& img": {
                  height: "100%",
                  width: "100%",
                },
              },
            }}
          >
            {[
              {
                title: "New Builds",
                description:
                  "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
                image: "1.png",
              },
              {
                title: "Renovations",
                description:
                  "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
                image: "2.png",
              },
              {
                title: "Airbnb's",
                description:
                  "Transform your space with our expert renovation services. Whether it's a complete overhaul or a stylish refresh, we breathe new life into your interiors, creating spaces that are both functional and beautiful.",
                image: "3.png",
              },
            ].map((panel, index) => (
              <Box className="photo">
                <img src={panel.image} alt={"img-" + index} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ScrollerComponent;
