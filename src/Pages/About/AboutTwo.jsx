import React from "react";

const AboutTwo = () => {
  return (
    <div className="bg-base-200">
      <div className="place-items-center py-3">
        <h1 className="md:text-5xl text-3xl p-4 font-merry font-bold">
          What I Do
        </h1>
      </div>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="card bg-base-300 rounded-box py-3 grid h-auto place-items-center">
          <h1 className="lg:text-4xl text-2xl font-merry font-bold">
            Web Development
          </h1>
          <p className="p-3 font-lora text-lg">
            Creating And Maintaining Websites Involves A Range Of Tasks, From
            Coding And Programming To Deploying And Debugging. As A Web
            Developer, You Build User Friendly, Efficient, And Interactive
            Websites That Meet Client And User Needs Using Various Programming
            Languages And Technologies Like HTML, CSS, Java Script, And
            Frameworks Such As React Or Angular.
          </p>
        </div>
        <div className="divider divider-accent">OR</div>
        <div className="card bg-base-300 rounded-box py-3 grid h-auto place-items-center">
          <h1 className="lg:text-4xl text-2xl font-merry font-bold">
            Responsive UI Design
          </h1>
          <p className="p-3 font-lora text-lg">
            Designing User Interfaces That Adapt Seamlessly To Different Devices
            And Screen Sizes Ensures An Optimal User Experience. You Focus On
            Creating Layouts That Function Well On Desktops, Tablets, And Mobile
            Devices, Using Techniques Like Flexible Grids, Media Queries, And
            Scalable Images To Maintain Usability And Aesthetics.
          </p>
        </div>
      </div>
      <div className="divider divider-accent">OR</div>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="card bg-base-300 rounded-box py-3 grid h-auto place-items-center">
          <h1 className="lg:text-4xl text-2xl font-merry font-bold">
            Diversity in Tech
          </h1>
          <p className="p-3 font-lora text-lg">
            Promoting And Supporting Diversity In The Tech Industry Involves
            Advocating For A More Inclusive And Equitable Environment. This Can
            Include Initiatives To Increase Representation Of Underrepresented
            Groups In Technology Roles, Creating Inclusive Workplace Policies,
            And Fostering A Culture Of Respect And Opportunity For All
            Individuals, Regardless Of Their Background.{" "}
          </p>{" "}
        </div>
        <div className="divider divider-accent">OR</div>
        <div className="card bg-base-300 rounded-box py-3 grid h-auto place-items-center">
          <h1 className="lg:text-4xl text-center text-2xl font-merry font-bold">
            Experience Design & Functionality
          </h1>
          <p className="p-3 font-lora text-lg">
            Enhancing User Experience ( UX) And Ensuring The Functionality Of
            Digital Products Involve Designing Intuitive, Engaging, And
            Effective Interactions. You Prioritize Understanding User Behavior
            And Needs, Employing Tools And Methodologies To Create Seamless,
            Efficient, And Enjoyable Experiences. This Includes Usability
            Testing, User Research, And Iterative Design To Refine And Optimize
            Functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
