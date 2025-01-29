import React from "react";
import Resume from "../../Asset/KunalDeotale-FrontendDeveloper(React)-T7mk.pdf";
const Intro = () => {
  return (
    <div id="intro">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2021/02/01/11/47/wallpaper-5970329_640.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-merry font-bold">
              Hello there
            </h1>
            <p className="mb-5 leading-relaxed lg:leading-loose text-3xl md:text-5xl font-merry font-semibold">
              Kunal Deotale <br /> Full-Stack Web Developer
            </p>
            <button className="btn md:text-lg text-sm font-merry btn-accent">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
