import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "1rem",
    right: "10%",
  },
  closed: {
    width: 100,
    height: 40,
    top: "1.5rem",
    right: "10%",
  }
}

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className="header">
      <h1>example</h1>
      <div className="">
        <motion.div 
          className="menu"
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }} 
        >
        </motion.div>
        <Button isActive={isActive} setActive={setActive} />
      </div>
    </header>
  );
};

export default Navbar;
