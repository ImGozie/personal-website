import React, { useEffect, useRef } from "react";
import {
  animate,
  distance,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Cursor = ({ stickyEl }) => {
  const [isHovered, setHovered] = React.useState(false);
  const cursorRef = useRef(null);
  const cursorSize = isHovered ? 60 : 10;

  const koordinat = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const movementOption = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMovement = {
    x: useSpring(koordinat.x, movementOption),
    y: useSpring(koordinat.y, movementOption),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = stickyEl.current.getBoundingClientRect();

    const center = {
      x: left + width / 2,
      y: top + height / 2,
    };

    const distance = {
      x: clientX - center.x,
      y: clientY - center.y,
    };

    if (isHovered) {
      rotate(distance);
      const stretcher = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(stretcher, [0, width / 2], [1, 1.3]);
      const newScaleY = transform(stretcher, [0, height / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      koordinat.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
      koordinat.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
    } else {
      koordinat.x.set(clientX - cursorSize / 2);
      koordinat.y.set(clientY - cursorSize / 2);
    }
  };

  const manageMouseOver = () => {
    setHovered(true);
  };

  const manageMouseLeave = () => {
    setHovered(false);

    animate(
      cursorRef.current,
      {
        scaleX: 1,
        scaleY: 1,
      },
      {
        duration: 0.1,
      },
      {
        type: "spring",
      }
    );
  };

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

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scale(${scaleX}, ${scaleY})`;
  };

  return (
    <motion.div
      transformTemplate={template}
      ref={cursorRef}
      className="z-30 h-10 w-10 rounded-[50%] fixed pointer-events-none mix-blend-difference bg-[#F4DFC8]"
      style={{
        left: smoothMovement.x,
        top: smoothMovement.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    ></motion.div>
  );
};

export default Cursor;
