"use client";
import AstronauntIcon from "@/public/icons/astronaunt";
import { motion } from "framer-motion";
import React from "react";

const BottomWavyBg = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-full relative"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f0e8"
          fillOpacity="1"
          d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,176C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="animated-div md:block hidden absolute bottom-16 right-24 transform scale-x-[-1] rotate-[0deg]">
        <AstronauntIcon />
      </div>
    </motion.div>
  );
};

export default BottomWavyBg;
