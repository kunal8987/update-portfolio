import React from "react";
import { ProjectData } from "./Data";

const Project = () => {
  return (
    <div id="projects">
      <div className="place-items-center">
        <h1 className="md:text-5xl text-3xl font-merry font-bold">Projects</h1>
      </div>
      {ProjectData.map((el) => {
        return (
          <div className=" my-2  md:my-4">
            <div className="card lg:card-side px-3 bg-base-100 shadow-xl">
              <figure>
                <img src={el.src} />
              </figure>
              <div className="card-body">
                <h2 className="card-title md:text-2xl font-semibold font-merry">
                  {el.name}
                </h2>
                <p className="font-lora text-lg">{el.desc}</p>
                <p className="font-lora text-lg pb-2">
                  Tech-Stack :- {el.stack}
                </p>
                <div className="card-actions justify-end">
                  <a href={el.github} target="_blank">
                    {" "}
                    <button className="btn font-merry btn-accent">
                      Git-Hub
                    </button>
                  </a>
                  <a href={el.deploy} target="_blank">
                    {" "}
                    <button className="btn font-merry btn-accent">
                      Deploy
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="divider divider-accent"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
