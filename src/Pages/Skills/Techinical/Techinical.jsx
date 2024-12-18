import React from "react";
import Tools from "../Tools/Tools";

const Techinical = () => {
  let arr = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Typescript",
    "Redux",
    "Node.js",
    "ExpressJS",
    "Mongoose",
    "Mongodb",
    "Tailwindcss",
    "DevUI",
    "Bootstrap",
    "DaisyUi",
  ];

  return (
    <div className="bg-base-200">
      <div className="place-items-center py-3">
        <h1 className="md:text-5xl text-3xl p-4 font-merry font-bold">
          Technical Skills
        </h1>
      </div>
      {arr.map((el) => {
        return (
          <div className="badge p-5 font-lora text-xl m-2 badge-accent">
            {el}
          </div>
        );
      })}
      <Tools />
    </div>
  );
};

export default Techinical;
