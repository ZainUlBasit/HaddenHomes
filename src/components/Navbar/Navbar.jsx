import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-[10vh] bg-white">
      <div className="flex gap-x-2">
        <Link to={"/"}>HOME</Link>
        <Link to={"/about"}>ABOUT US</Link>
        <Link>SERVICES</Link>
        <Link>PROJECT</Link>
        <Link>BLOG</Link>
        <Link>CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
