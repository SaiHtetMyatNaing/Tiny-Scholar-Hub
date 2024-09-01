'use client'
import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import WBPageOne from "./WorkBookPageOne/workbook-page-one";
import WBPageTwo from "./WorkBookPageTwo/workbook-page-two";

const MyanmarAlphabetWorkbook = () => {
  return (
    <div className="relative w-full max-h-dvh ">
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
    </div>
  );
};

export default MyanmarAlphabetWorkbook;
