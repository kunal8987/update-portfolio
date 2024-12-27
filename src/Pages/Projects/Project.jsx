import React from "react";
import { ProjectData } from "./Data";

const Project = () => {
  {
    ProjectData.map((el) => {
      return (
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={el.src} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{el.name}</h2>
              <p>{el.desc}</p>
              <p>{el.stack}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
};

export default Project;
