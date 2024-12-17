import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="place-items-center py-3">
              <h1 className="md:text-5xl text-3xl font-merry font-bold">
                About Me
              </h1>
            </div>

            <p className="py-5 font-lora md:text-2xl text-xl">
              As A Full Stack And Frontend Developer With One Year Of
              Experience, I Bring A Versatile Skill Set To Create Seamless Web
              Applications. I Am Proficient In Html, Css, Java Script, Node.js,
              And Express With Experience In Frameworks Like React, Next.js,. I
              Design Engaging, Responsive User Interfaces And Contribute To All
              Stages Of Development, From Concept To Deployment. My Work Is
              Driven By User Centered Design Principles And Modern Development
              Practices. Dedicated To Continuous Learning, I Stay Updated With
              The Latest Trends And Best Practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
