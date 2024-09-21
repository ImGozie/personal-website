import React from "react";
import { motion } from "framer-motion";

const PerspectiveLabel = ({ txt }) => {
  return (
    <div className="perspectiveLabel">
      <p>{txt}</p>
      <p>{txt}</p>
    </div>
  );
};

const Button = ({ isActive, setActive }) => {
  return (
    <div onClick={() => setActive(!isActive)} className="menu-btn">
      <motion.div
        className="slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="el">
          <PerspectiveLabel txt="Menu" />
        </div>
        <div className="el">
          <PerspectiveLabel txt="Close" />
        </div>
      </motion.div>
    </div>
  );
};

export default Button;
