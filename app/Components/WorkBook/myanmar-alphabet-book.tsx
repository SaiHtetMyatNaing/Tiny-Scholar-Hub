'use client'
import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import WBPageOne from "./WorkBookPageOne/workbook-page-one";
import WBPageTwo from "./WorkBookPageTwo/workbook-page-two";
import { motion} from "framer-motion";

const MyanmarAlphabetWorkbook = () => {
  return (
    <motion.div
    initial={{ opacity : 0 , y : 60 }}
    animate={{ opacity : 1 , y : 0}}
    transition={{duration : 0.8}}
    className="relative w-full  ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <WBPageOne />
        </SwiperSlide>
        <SwiperSlide>
          <WBPageTwo />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default MyanmarAlphabetWorkbook;
