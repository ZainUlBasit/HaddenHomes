import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-[10vh] bg-white">
      <div className="flex gap-x-2">
        <div>HOME</div>
        <div>ABOUT US</div>
        <div>SERVICES</div>
        <div>PROJECT</div>
        <div>BLOG</div>
        <div>CONTACT</div>
      </div>
    </div>
  );
};

export default Navbar;
