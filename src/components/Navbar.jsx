import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className="fixed flex justify-between items-center w-full text-gray-50 px-28 py-6">
      <h1>example</h1>
      <Button isActive={isActive} setActive={setActive} />
    </header>
  );
};

export default Navbar;
