import React from "react";
import Logo from "../assets/Svg/Logo";
import Dropdown from "./Dropdown";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div className="max-w-screen mx-7 flex justify-between">
      <div className="w-[3.75rem] h-[3.5rem] sticky top-7">
        <a href="#">
          <Logo />
        </a>
      </div>
      <Dropdown />
    </div>
  );
};

export default Header;
