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
import { DataProps, useDataStore } from "@/app/store/useFlashcardData";

export function removeDuplicates(data: DataProps[]): DataProps[] {
  const uniqueMap = new Map<string, DataProps>();

  data && data.forEach(item => {
      // Check if the character is already in the map
      if (!uniqueMap.has(item.character)) {
          // If not, add it to the map
          uniqueMap.set(item.character, item);
      }
  });

  return Array.from(uniqueMap.values());
}
const MyanmarAlphabetWorkbook = ({data} : {data : DataProps[]}) => {


  const char = data && removeDuplicates(data);

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full"
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data && data.length > 0 &&   char && char.map((item, index) => {
            const filteredData = data.filter(
              (dataItem) => dataItem.character === item.character
            );
            return [
              <SwiperSlide key={`$page1-${index}`}>
                <WBPageOne character={item.character} data={filteredData} />
              </SwiperSlide>,
              <SwiperSlide key={`$page2-${index}`}>
                <WBPageTwo data={filteredData} />
              </SwiperSlide>
            ];
          })}

      </Swiper>
    </motion.div>
  );
};

export default MyanmarAlphabetWorkbook;
