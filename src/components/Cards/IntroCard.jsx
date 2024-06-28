import React, { useEffect, useState } from "react";
import SimpleCard from "./SimpleCard";

const IntroCards = () => {
  return (
    <div>
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
        <SimpleCard panel={panel} index={index} />
      ))}
    </div>
  );
};

export default IntroCards;
