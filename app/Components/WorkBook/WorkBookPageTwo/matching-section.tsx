"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { speakText } from "@/app/lib/myanmar-speect";
import { shuffle } from "lodash";
import { VolumeUp } from "@mui/icons-material";

const MatchingSection = () => {
  const [array, setArray] = useState(["က", "ခ", "န", "တ"]);
  const [array2, setArray2] = useState(["က", "ခ", "န", "တ"]);

  const instruction = "အောက်ပါတို့ကိုယှဥ်တွဲပါ။";
  const instruction2 = "အောက်ပါတို့ကိုရှင်တွဲပါ။";
  const controls = useDragControls();

  useEffect(() => {
    const mixed = shuffle(array2);
    setArray2(mixed);
  }, []);

  return (
    <Box className="z-[2000] flex flex-col gap-4 justify-between cursor-pointer">
      <Typography fontSize="20px" onClick={() => speakText(instruction2)}>
        {instruction} <VolumeUp />
      </Typography>

      <Box className="flex justify-between max-w-xl  w-[17em] sm:w-[24em] md:w-[30em] mx-auto  cursor-pointer">
        <Box className="flex flex-col gap-2">
          {array.map((item) => {
            return (
              <Box
                className="flex items-center justify-center w-24 h-20 text-center border-[1px] border-black rounded-md shadow-md"
                key={item}
              >
                <span>{item}</span>
              </Box>
            );
          })}
        </Box>

        <Reorder.Group
          className="flex flex-col gap-2 "
          axis="y"
          values={array2}
          onReorder={setArray2}
        >
          {array2.map((item) => {
            return (
              <Reorder.Item
                dragListener
                dragControls={controls}
                value={item}
                className="flex items-center justify-center w-24 h-20 text-center bg-white border-[1px] border-black  rounded-md shadow-md"
                key={item}
              >
                <span>{item}</span>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </Box>
    </Box>
  );
};

export default MatchingSection;
