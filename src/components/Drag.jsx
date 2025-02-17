import React from "react";
import dark4 from "../assets/dark4.jpg";
import { motion, useDragControls } from "framer-motion";

function Drag() {
  const controls = useDragControls();
  return (
    <motion.div className="flex justify-center items-center flex-col gap-5 w-screen h-screen">
      <motion.img
        onPointerDown={(e) => controls.start(e)}
        // onPointerDown={(e) => controls.start(e, { snapToCursor: true })}
        // controls.start(e, { snapToCursor: true })
        drag
        dragControls={controls}
        src={dark4}
        alt="dark4"
        className="w-[40%]"
      />
    </motion.div>
  );
}

export default Drag;
