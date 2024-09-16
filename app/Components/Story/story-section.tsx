"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";
import { Box, Paper, Typography } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import { speakText } from "@/app/lib/myanmar-speect";
import { motion } from "framer-motion";
import { StorySegmentProps } from "@/app/lib/type";

export default function StorySection({data} : {data: StorySegmentProps[]}) {
  
  return (
    <motion.div
    initial={{ scale : 0 , opacity : 0 }} 
    animate={{ scale : 1 , opacity : 1}}
    transition={{duration : 0.5}}
    >
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        keyboard={true}
        slidesPerView={"auto"}
        initialSlide={0}
        mousewheel={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 350,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        className="w-full"
      >  
        {data && data.length > 0 && data?.map((story, i) => {
          return (
            <SwiperSlide
              className="max-w-2xl p-4 rounded-md border relative border-[#ffd700] bg-white"
              key={i}
            >
              {/* I wrapped it because I can't directly flex them */}
              <Box className="w-full h-[35em] md:h-[24em] flex flex-col md:flex-row items-center gap-2">
                <span className="absolute top-5 left-6 bg-gray-200 rounded-md text-center  w-6 h-6">
                  {i + 1}
                </span>
               {story && <Box
                  onClick={() => {
                    story.sentences.sentences.map((item, i) => {
                      speakText(item.sentence);
                    });
                  }}
                  className="absolute top-5 right-6 text-gray-400 hover:text-black cursor-pointer"
                >
                  <VolumeUp />
                </Box>}
                <Box className="w-[20em] h-[20em]">
                  {story && story.image_url && <Image
                    src={story.image_url}
                    alt="hello"
                    className="object-contain w-full h-full"
                    width={200}
                    height={200}
                  />}
                </Box>
                <Box className="w-[20em]">
                  {story && story.sentences.sentences.map((item, i) => {
                    return <Typography key={i}>{item.sentence}</Typography>;
                  })}
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
