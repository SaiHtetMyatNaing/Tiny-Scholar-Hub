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
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Keyboard, Mousewheel]}
        mousewheel={true}
        keyboard={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        className="mySwiper"
      >
        {words.map((word) => {
          return (
            <SwiperSlide
              key={word.id}
              className="items-center shadow-xl border bg-white"
            >
              <Box className='w-full items-center justify-between px-10 h-full flex'>
                <Image
                  src={word.image}
                  alt={word.item}
                  width={300}
                  height={300}
                  className="object-contain"
                />
                <Typography variant="h1" className="text-[#ffd700]">
                  {word.item}
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
