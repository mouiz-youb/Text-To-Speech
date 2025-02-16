import React, { useState } from "react";
import { motion } from "framer-motion";
import dark4 from "../assets/dark4.jpg";
import dark3 from "../assets/dark3.jpg";
import dark2 from "../assets/dark2.jpg";
function SliderOne() {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);
  const handeleNext = () => {
    setPositionIndex((prevIndex) => {
      const newPosition = prevIndex.map((prevIndex) => (prevIndex + 1) % 5);
      return newPosition;
    });
  };
  const images = [dark2, dark3, dark4, dark3, dark4];
  const positions = ["left", "left1", "left2", "left3", "left4"];
  const imagevariants = {
    left: {
      x: "-100%",
      scale: 0.5,
      zIndex: 1,
    },
    left1: {
      x: "-50%",
      scale: 0.7,
      zIndex: 2,
    },
    left2: {
      x: "0",
      scale: 1,
      zIndex: 5,
    },
    left3: {
      x: "50%",
      scale: 0.7,
      zIndex: 2,
    },
    left4: {
      x: "100%",
      scale: 0.5,
      zIndex: 1,
    },
  };
  return (
    <div className="flex justify-center items-center flex-col gap-2 w-screen relative">
      <h1>SliderOne</h1>
      <div className="flex justify-center items-center flex-row relative w-screen h-screen scale-[0.8]">
        {images.map((image, index) => (
          <motion.img
            src={image}
            key={index}
            className="rounded-2xl w-[40%] absolute"
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imagevariants}
            transition={{ duration: 0.5 }}
          />
        ))}
        <button
          className="z-50 text-3xl text-green-500 absolute bottom-[10%] cursor-pointer "
          onClick={handeleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SliderOne;
