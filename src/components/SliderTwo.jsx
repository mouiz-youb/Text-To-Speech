import React from "react";
import { motion } from "framer-motion";

function SliderTwo() {
  return (
    <div className="bg-blue-400 flex justify-center items-center gap-5 w-screen h-screen [perspective:1000px] relative">
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(0deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(45deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(90deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(135deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(180deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(225deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(270deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(315deg)]"></motion.div>
      <motion.div className="w-[200px] h-[200px] bg-amber-200 absolute origin-center [transform:translateZ(500px)_rotateY(360deg)]"></motion.div>
    </div>
  );
}

export default SliderTwo;
