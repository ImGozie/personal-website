import React, { useState } from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="fixed top-0 boxWidth z-10">
      <nav className="w-full flex items-center justify-between sm:px-16 px-6 py-4">
        <h1 className="uppercase">example</h1>
        <MenuButton isOpen={isOpen} setOpen={setOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
