import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cursorSize = 20
const Cursor = () => {

  const koordinat = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const movementOption = {
      damping: 20,
      stiffness: 300,
      mass: 0.2
  }
  const smoothMovement = {
    x: useSpring(koordinat.x, movementOption),
    y: useSpring(koordinat.y, movementOption)
  }

  const manageMove = (e) => {
    const { clientX, clientY } = e;
    koordinat.x.set(clientX - cursorSize / 2);
    koordinat.y.set(clientY - cursorSize / 2);
  };
  useEffect(() => {
    window.addEventListener("mousemove", manageMove);
    return () => {
      window.removeEventListener("mousemove", manageMove);
    };
  }, []);

  return (
    <motion.div
      className="z-30 w-5 h-5 bg-white rounded-full fixed pointer-events-none"
      style={{ left: smoothMovement.x, top: smoothMovement.y }}
    ></motion.div>
  );
};

export default Cursor;
