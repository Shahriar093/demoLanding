import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";
import { LuEqual, LuX } from "react-icons/lu";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="w-12 h-12 ms-auto mr-4 bg-transparent rounded-full absolute right-0"
      animate={
        isOpen
          ? {
              width: "18rem",
              height: "24rem",
              paddingLeft: "1.5rem",
              borderRadius: [
                "50%",
                "45%",
                "40%",
                "35%",
                "30%",
                "20%",
                "10%",
                "5%",
                "3%",
              ],
              opacity: [0, 1],
              backgroundColor: "#FFFFFF",
            }
          : { width: "3rem", height: "3rem", borderRadius: "50%" }
      }
      transition={{ duration: 0.5 }}
    >
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={toggleDropdown}
        className="w-12 h-12 rounded-full bg-transparent ms-auto flex flex-col items-center justify-center border-2 border-black"
      >
        {isOpen ? (
          <motion.div className="text-3xl">
            <LuX />
          </motion.div>
        ) : (
          <motion.div className="text-3xl">
            <LuEqual />
          </motion.div>
        )}
      </motion.button>

      {isOpen && (
        <motion.ul
          animate={isOpen ? { opacity: ["0", "0.5", "1"] } : ""}
          transition={{ duration: 2 }}
          className="font-semibold text-3xl opacity-0"
        >
          <li>Work</li>
          <li>Agency</li>
          <li>
            Service
            <motion.span
              animate={isOpen ? { rotateZ: +90 } : ""}
              transition={{ duration: 5 }}
            >
              +
            </motion.span>
          </li>
          <li>Blog</li>
          <li>Culture</li>
          <li>Contact</li>
          <div className="w-full flex justify-center mt-12">
            <div
              className="w-[13rem] h-12 rounded-full border-2 border-black p-4 text-black
            flex justify-center text-lg items-center transition-transform
            cursor-pointer hover:scale-105"
            >
              Share your project &rarr;
            </div>
          </div>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default Dropdown;
