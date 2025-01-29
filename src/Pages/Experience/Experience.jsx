import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="bg-base-200">
      <div className="place-items-center py-3">
        <h1 className="md:text-5xl text-3xl p-4 font-merry font-bold">
          Experience
        </h1>
      </div>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-lora font-semibold ">May-June 2024</time>
            <div className="text-xl font-merry font-black">
              Full-Stack Developer
            </div>
            <div className="text-lg font-merry font-black">
              Inno-Byte Services
            </div>
            <p className="font-lora text-lg ">
              As A Full Stack Developer Intern, I Will Be Immersed In A Variety
              Of Projects And Tasks. My Role In Developing And Integrating
              Technologies Will Be Instrumental In Building Scalable Solutions
              That Cater To Our Customer Needs
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-lora font-semibold ">May-October 2024</time>
            <div className="text-xl font-merry font-black">Web Developer</div>
            <div className="text-lg font-merry font-black">
              Zidio Development
            </div>
            <p className="font-lora text-lg">
              As A Full Stack Developer With Expertise In The MERN Stack, I
              Possess A Strong Foundation In Both Front End And Back End
              Development. My Proficiency In Mongo DB, Express.js, React.js, And
              Node.js Enables Me To Build Scalable, High Performance Web
              Applications From Conception To Deployment. Internship Will
              Include Training/orientation And Focus Primarily On Learning And
              Developing New Skills And Gaining A Deeper Understanding Of
              Concepts Through Hands On Application Of The Knowledge
            </p>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
