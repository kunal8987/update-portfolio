import React from "react";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  return (
    <div className="breadcrumbs-horizontal font-merry cursor-pointer top-0 sticky left-0 z-30 lg:text-lg text-sm">
      <ul className=" my-3">
        <li className="py-2">Intro</li>
        <li className="py-2">
          <a>About</a>
        </li>
        <li className="py-2">Experience</li>
        <li className="py-2">Projects</li>
        <li className="py-2">
          <a>Skills</a>
        </li>
        <li className="py-2">Github</li>
        <li className="py-2">Contact</li>
      </ul>
      <button className="btn lg:text-lg text-sm btn-accent">Resume</button>
      <div className="py-2 my-2">
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
