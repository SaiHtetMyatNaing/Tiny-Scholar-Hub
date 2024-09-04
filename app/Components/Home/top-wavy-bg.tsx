"use client";
import React from "react";
import { motion} from "framer-motion";

const TopWavyBg = () => {
  return (
    <motion.div 
      initial={{ opacity : 0 , y : -30}}
     animate={{ opacity : 1 , y :0}}
     transition={{ duration : 1}}
    className="-mt-[9em] top-4 md:-mt-[10em] sm:-mt-[14em] sm:-top-[1em] sticky md:-top-[1em] lg:-top-[5em] lg:-mt-64 z-[1000]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,261.3C672,256,768,192,864,170.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </motion.div>
  );
};

export default TopWavyBg;
