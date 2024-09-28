import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = ({ stickyEl }) => {
  
  const [isHovered, setHovered] = React.useState(false);
  
  const cursorSize = isHovered ? 60 : 10;

  const koordinat = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  
  const movementOption = {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  }

  const smoothMovement = {
    x: useSpring(koordinat.x, movementOption),
    y: useSpring(koordinat.y, movementOption)
  }
  
  const manageMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = stickyEl.current.getBoundingClientRect();
    
    const center = {
      x: left + width / 2,
      y: top + height / 2
    }

    const distance = {
      x: clientX - center.x,
      y: clientY - center.y
    }

    if(isHovered) {
      koordinat.x.set((center.x - cursorSize / 2) + distance.x * 0.1);
      koordinat.y.set((center.y - cursorSize / 2) + distance.y * 0.1);
    } else {
      koordinat.x.set(clientX - cursorSize / 2);
      koordinat.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setHovered(true);
  }

  const manageMouseLeave = () => {
    setHovered(false);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMove);
    stickyEl.current.addEventListener("mouseover", manageMouseOver);
    stickyEl.current.addEventListener("mouseleave", manageMouseLeave);
    return () => {
      window.removeEventListener("mousemove", manageMove);
      stickyEl.current.removeEventListener("mouseover", manageMouseOver);
      stickyEl.current.removeEventListener("mouseleave", manageMouseLeave);
    };
  }, [cursorSize]);

  return (
    <motion.div
      className="z-30 h-10 w-10 rounded-[50%] fixed pointer-events-none mix-blend-difference bg-[#F4DFC8]"
      style={{ left: smoothMovement.x, top: smoothMovement.y }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
