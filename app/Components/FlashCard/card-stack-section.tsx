"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Keyboard, Mousewheel } from "swiper/modules";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export type FlashCardProps = {
  character: string;
  image_url: string;
  name_mm: string;
};

export default function StackSection({ data }: { data: FlashCardProps[] }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto w-[14em] shadow-none h-[20em] sm:w-[20em] sm:h-[25em] md:w-[40em] md:h-[25em] lg:w-[50em] lg:h-[30em]"
    >
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Keyboard, Mousewheel]}
        mousewheel={true}
        keyboard={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        className="flashcards-swiper w-full "
      >
        {data &&
          data.length > 0 &&
          data?.map((word, i) => {
            return (
              <SwiperSlide
                key={i}
                className="bg-white border  border-[#ffd700] rounded-lg max-w-full w-full"
              >
                <Box className="items-center relative justify-center gap-4 sm:gap-7 mb-3 md:gap-0 md:justify-between px-6 w-full max-w-full h-full flex md:flex-row flex-col">
                  <Image
                    src={word.image_url}
                    alt={word.name_mm}
                    width={250}
                    height={250}
                    className="object-contain md:w-[15em] lg:w-auto h-auto w-auto"
                  />
                  <Typography className="w-full text-wrap   text-center select-none cursor-pointer text-3xl md:text-[2.5em] lg:text-[3.4em] text-[#ffd700]">
                    {word.name_mm}
                  </Typography>
                  <Link
                    href="www.tinyscholar.com"
                    className="text-[10px]  md:text-sm absolute bottom-0 md:right-6 text-black/25 md:bottom-2"
                  >
                    <em>www.tinyscholarhub.com</em>
                  </Link>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </motion.div>
  );
}
