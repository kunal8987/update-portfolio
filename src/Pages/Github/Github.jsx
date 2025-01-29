import React from "react";

const Github = () => {
  return (
    <div id="github" className="bg-base-200 py-12">
      <div className="place-items-center">
        <h1 className="md:text-5xl text-3xl font-merry font-bold">
          Git-Calender
        </h1>
      </div>

      <div className="flex flex-wrap pt-10 justify-center align-middle ">
        <img
          src="https://ghchart.rshah.org/kunal8987"
          className=" aspect-auto object-contain object-top w-[90%] rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Github;
