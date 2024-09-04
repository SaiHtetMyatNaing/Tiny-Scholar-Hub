import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import {
  EffectCards,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import { WordItem } from "@/app/lib/type";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StackSection() {
  const [words] = useState<WordItem[]>([
    { id: 1, item: "ကဏန်း", image: "/crab_က.png" },
    { id: 2, item: "ကရိန်းစက်", image: "/crane_က.png" },
    { id: 3, item: "ကတိုးကောင်", image: "/caterpillar_က.png" },
    {
      id: 4,
      item: "ကယောင် ချောက်ချား",
      image: "/hallucination_က.png",
    },
    { id: 5, item: "ကလေးငယ်", image: "/child_က.png" },
    { id: 6, item: "ကလောင်တံ", image: "/pen_က.png" },
  ]);
  return (
    <motion.div
    initial={{ scale : 0 , opacity : 0 }} 
    animate={{ scale : 1 , opacity : 1}}
    transition={{duration : 0.5}}
    className="max-w-4xl mx-auto w-[14em] h-[20em] sm:w-[20em] sm:h-[25em] md:w-[40em] md:h-[25em] lg:w-[50em] lg:h-[30em]"
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Keyboard, Mousewheel]}
        mousewheel={true}
        keyboard={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        className="flashcards-swiper w-full"
      >
        {words.map((word , i) => {
          return (
            <SwiperSlide
              key={word.id}
              className="bg-white border-2 rounded-lg max-w-full w-full"
            >
              <Box className='items-center justify-center gap-10 md:gap-0 md:justify-between px-6 w-full max-w-full h-full flex md:flex-row flex-col'>
                <Image
                  src={word.image}
                  alt={word.item}
                  width={250}
                  height={250}
                  className="object-contain md:w-[15em] lg:w-auto h-auto w-auto"
                />
                <Typography variant="h2" className="w-full text-center text-3xl md:text-[3em] lg:text-[5em] leading-snug text-[#ffd700]">
                  {word.item} 
                </Typography>
              </Box>
              <Link href='www.tinyscholar.com'><em>www.tinyscholar.com</em></Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
