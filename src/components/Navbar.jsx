import React, { useState, forwardRef } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Magnetic from "../lib/MagneticFX";
import Logo from "../assets/img/loggo.png";

const Navbar = forwardRef(function Navbar(props, ref) {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="fixed top-0 boxWidth z-10">
      <nav className="w-full flex items-center justify-between sm:px-16 px-6 py-5">
        <img src={Logo} alt=".Logo" width={100} className="dark:invert filter"/>
        <Magnetic>
          <div ref={ref} className="group relative cursor-pointer bounds">
            <Hamburger
              easing="ease-out"
              size={20}
              toggled={isOpen}
              toggle={setOpen}
              rounded
            />
          </div>
        </Magnetic>
        {/* <div className="menu absolute top-0 left-0 bg-slate-400 h-[50vh] w-full"></div> */}
      </nav>
    </header>
  );
});

export default Navbar;
