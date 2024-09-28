import React, { useState, forwardRef } from "react";
import { Cross as Hamburger } from "hamburger-react";

const Navbar = forwardRef(function Navbar(props, ref) {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <header className="fixed top-0 boxWidth z-10">
      <nav className="w-full flex items-center justify-between sm:px-16 px-6 py-4">
        <h1 className="uppercase">example</h1>
        <div ref={ref} className="group relative cursor-pointer menu-parrent">
          <Hamburger
            easing="ease-out"
            size={20}
            toggled={isOpen}
            toggle={setOpen}
            rounded
          />
          {/* <div className="bounds"></div> */}
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
