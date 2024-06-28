import React from "react";

const HomeBanner = () => {
  return (
    <div className="bg-custom-gradient flex h-[90vh] justify-center items-end">
      <div
        className="relative inline-block p-[10px] rounded-tr-[180px] rounded-tl-[180px] z-10"
        style={{
          background:
            "linear-gradient(128.08deg, #F9FAF2 78.93%, #FEFFF2 14.87%, #F1F4DC 47.86%, #FFFEFB 78.93%)",
        }}
      >
        <img
          src="./home.jpg"
          className="h-[550px] w-[350px] object-cover relative z-10 rounded-tr-[180px] rounded-tl-[180px]"
        />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-start items-center mt-[100px]">
          <span className="text-black font-[Montserrat] text-3xl font-[600] z-20 text-shadow">
            Design
          </span>
          <span className="text-black font-[Montserrat] text-3xl font-[600] z-20 text-shadow">
            Build
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
