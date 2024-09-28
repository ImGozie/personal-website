import React, { useState, forwardRef } from "react";
import { Cross as Hamburger } from "hamburger-react";
import Magnetic from "../lib/MagneticFX";

const Navbar = forwardRef(function Navbar(props, ref) {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="fixed top-0 boxWidth z-10">
      <nav className="w-full flex items-center justify-between sm:px-16 px-6 py-5">
        <h1 className="uppercase">example</h1>
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
      </nav>
    </header>
  );
});

export default Navbar;
