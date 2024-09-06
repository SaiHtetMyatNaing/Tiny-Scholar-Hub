"use client";
import React, { useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Keyboard , Mousewheel } from "swiper/modules";
import { story } from "@/app/lib/story-data";
import Image from "next/image";
import { Box } from "@mui/system";
import { VolumeUp } from "@mui/icons-material";
import { speakText } from "@/app/lib/myanmar-speect";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StorySection() {
  const data = useMemo(() => story, []);

  return (
    <motion.div
    initial={{ scale : 0 , opacity : 0 }} 
    animate={{ scale : 1 , opacity : 1}}
    transition={{duration : 0.5}}
    className="max-w-sm sm:max-w-4xl  mx-auto w-[17em] shadow-none h-[27em] sm:w-[35em] sm:h-[20em] md:w-[40em] md:h-[25em] lg:w-[50em] lg:h-[30em]"
    >
    <Swiper
      mousewheel={true}
      effect={"cards"}
      keyboard={true}
      modules={[EffectCards, Mousewheel,Keyboard ]}
      className="w-full h-[70em]"
    >
      {data.map((item, i) => {
        return (
          <SwiperSlide
            className="bg-white  border p-5 rounded-md select-none border-[#ffd700] "
            key={i}
          >
            <Box className="w-full relative h-full flex flex-col sm:flex-row items-center">
                <Box className='absolute w-6 h-6 text-center left-0 top-0 rounded-md text-black-300/25  bg-gray-300/25  '>
                    {i + 1}
                </Box>
              <Image
                src={item.image}
                className="w-[12em] md:w-[20em] lg:w-[40em] lg:h-[25em]"
                alt={item.sentences[i]}
                height={300}
                width={200}
              />

              <Box className="max-w-xl text-sm sm:text-md md:text-lg lg:text-xl text-clip">
                <span className="pl-4">{item.sentences[0]}</span>
                {item.sentences.slice(1).join(" ")}
                <Box
                  className="cursor-pointer absolute top-0 text-gray-300 hover:text-black right-0"
                  onClick={() => {
                    item.sentences.map((sentence) => speakText(sentence));
                  }}
                >
                  <VolumeUp />
                </Box>
                <Link
                  href="www.tinyscholar.com"
                  className="text-[10px] -bottom-3 right-0  md:text-sm absolute sm:right-1 sm:-bottom-4 md:right-0 hover:text-black text-black/25 md:-bottom-3"
                >
                  <em>www.tinyscholarhub.com</em>
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </motion.div>
  );
}
