"use client";
import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import WBPageOne from "./WorkBookPageOne/workbook-page-one";
import WBPageTwo from "./WorkBookPageTwo/workbook-page-two";
import { motion } from "framer-motion";
import { DataProps } from "@/app/store/useFlashcardData";

export function getUniqueOrderedCharacters(data: DataProps[]): string[] {
  const uniqueChars = new Set<string>();
  const orderedChars: string[] = [];

  data && data.forEach(item => {
    if (!uniqueChars.has(item.character)) {
      uniqueChars.add(item.character);
      orderedChars.push(item.character);
    }
  });

  return orderedChars;
}

const MyanmarAlphabetWorkbook = ({data} : {data : DataProps[]}) => {
  const uniqueOrderedChars = data && getUniqueOrderedCharacters(data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full  h-full"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data && data.length > 0 && uniqueOrderedChars && uniqueOrderedChars.map((char, index) => {
            const filteredData = data.filter(
              (dataItem) => dataItem.character === char
            );
            
            return [
              <SwiperSlide key={`page1-${index}`}>
                <WBPageOne character={char} data={filteredData} />
              </SwiperSlide>,
              <SwiperSlide key={`page2-${index}`}>
                <WBPageTwo data={filteredData} char={char} />
              </SwiperSlide>
            ];
          })}
      </Swiper>
    </motion.div>
  );
};

export default MyanmarAlphabetWorkbook;