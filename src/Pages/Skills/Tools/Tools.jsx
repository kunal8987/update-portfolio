import React from 'react'

const Tools = () => {

    let arr = ["Git", "VScode", "Postman", "MongodbAtlas", "Npm", "DevTools","Command Line","ThunderClient","Vercel","Netlify","Render" ]
  return (
    <div className="bg-base-200">
    <div className="place-items-center py-3">
      <h1 className="md:text-5xl text-3xl p-4 font-merry font-bold">
        Tools
      </h1>
    </div>
    {arr.map((el) => {
      return (
        <div className="badge p-5 font-lora text-xl m-2 badge-accent">
          {el}
        </div>
      );
    })}
  </div>
  )
}

export default Tools