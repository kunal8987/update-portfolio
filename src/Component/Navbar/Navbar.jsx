import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Resume from "../../Asset/KunalDeotale-FrontendDeveloper(React)-T7mk.pdf";

const Navbar = () => {
  return (
    <div className="breadcrumbs-horizontal font-merry cursor-pointer top-0 sticky z-30 lg:text-lg text-sm">
      <ul className=" my-3">
        <li className="py-2">
          <Link to="intro" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Intro
          </Link>
        </li>
        <li className="py-2">
          <Link to="about" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            About
          </Link>
        </li>
        <li className="py-2">
          <Link to="experience" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Experience
          </Link>
        </li>
        <li className="py-2">
          <Link to="skills" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Skills
          </Link>
        </li>
        <li className="py-2">
          <Link to="projects" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Projects
          </Link>
        </li>

        <li className="py-2">
          <Link to="github" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Github
          </Link>
        </li>
        <li className="py-2">
          <Link to="contact" smooth={true} duration={1500}>
            {" "}
            {/* updated */}
            Contact
          </Link>
        </li>
      </ul>
      <button className="btn md:text-lg text-sm btn-accent">
        <a
          href={Resume}
          download
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1W2v_oq54C1cVHX5ol9osY2wptRFFq94d/view?usp=sharing"
            )
          }
        >
          Resume
        </a>
      </button>
      <div className="py-2 my-2">
        <Toggle />
      </div>
    </div>
  );
};

export default Navbar;
