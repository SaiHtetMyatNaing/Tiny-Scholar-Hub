"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import { speakText } from "@/app/lib/myanmar-speect";
import { shuffle } from "lodash";
import { VolumeUp } from "@mui/icons-material";
import { myanmarAlphabet } from "@/app/lib/myanmar-alphabets";

const MatchingSection = ({ character }: { character: string }) => {
  const [hydrated, setHydrated] = React.useState(false);
  const randomAlphabets = getRandomAlphabets(myanmarAlphabet, 4) ;
  const [array, setArray] = useState([character, ...randomAlphabets]);
  const [array2, setArray2] = useState([character, ...randomAlphabets]);

  useEffect(()=> {
    setHydrated(!hydrated)
  } , [])

  function getRandomAlphabets(array: string[], count: number) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const instruction = "အောက်ပါတို့ကိုယှဥ်တွဲပါ။";
  const instruction2 = "အောက်ပါတို့ကိုရှင်တွဲပါ။";

  useEffect(() => {
    const mixed = shuffle(array2);
    setArray2(mixed);
  }, []);

  if(!hydrated) {return null}


  return (
    <Box className="z-[2000] flex flex-col gap-4 justify-between cursor-pointer">
      <Typography fontSize="20px" onClick={() => speakText(instruction2)}>
        {instruction} <VolumeUp />
      </Typography>

      <Box className="flex justify-between max-w-xl w-[17em] sm:w-[24em] md:w-[30em] mx-auto cursor-pointer">
        <Box className="flex flex-col gap-2">
          {array && array.map((item, index) => (
            <Box
              className="flex items-center justify-center w-24 h-20 text-center border-[1px] border-black rounded-md shadow-md"
              key={`${item} - ${index}`}
            >
              {character && <div>{item}</div>}
            </Box>
          ))}
        </Box>

        <Reorder.Group
          className="flex flex-col gap-2"
          axis="y"
          values={array2}
          onReorder={setArray2}
        >
          {array2 && array2.map((item, index) => (
            <Reorder.Item
              key={item} // Use item as key instead of index for better performance
              value={item}
              className="flex items-center justify-center w-24 h-20 text-center bg-white border-[1px] border-black rounded-md shadow-md"
            >
              {character && <div>{item}</div>}
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Box>
    </Box>
  );
};

export default MatchingSection;
