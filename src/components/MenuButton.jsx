import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

const MenuButton = ({ isOpen, setOpen }) => {
  return <Hamburger easing="ease-out" size={30} toggled={isOpen} toggle={setOpen} rounded />;
};

export default MenuButton;
