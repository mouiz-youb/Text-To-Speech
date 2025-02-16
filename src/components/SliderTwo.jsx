import React from "react";

import dark4 from "../assets/dark4.jpg";
import dark3 from "../assets/dark3.jpg";
import dark2 from "../assets/dark2.jpg";
import "../index.css";
function SliderTwo() {
  return (
    <div className=" flex justify-center items-center flex-col transform-3d ">
      <div className=" w-screen h-screen flex justify-center items-center flex-row gap-2 transform-3d relative perspective-[1000px] rotateY-0 ">
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1 ">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
        <span className="flex justify-center items-center w-[40%] absolute transform-3d top-0 left-0 transform1">
          <img src={dark4} className="w-[100%]" alt="" />
        </span>
      </div>
      <div></div>
    </div>
  );
}

export default SliderTwo;
