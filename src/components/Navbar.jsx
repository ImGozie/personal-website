import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header className="header">
      <h1>example</h1>
      <div className="">
        <div className="menu">
        </div>
        <Button isActive={isActive} setActive={setActive} />
      </div>
    </header>
  );
};

export default Navbar;
