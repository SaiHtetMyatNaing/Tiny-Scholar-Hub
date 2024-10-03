'use client'
import { Box, Input } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import { WordItem } from "@/app/lib/type";
import { englishNumeralToMyanmar } from "@/app/lib/myanmar-numerals";
import { speakText } from "@/app/lib/myanmar-speect";
import {shuffle} from 'lodash'
import { VolumeUp } from "@mui/icons-material";
import { DataProps } from "@/app/store/useFlashcardData";

const ListeningSection = ({data} : {data : DataProps[]}) => {

  const instruction = "အသံဖိုင်ကို နားထောင်ပြီး ပုံကို နံပါတ်တပ်ပါ။";
   // Use useMemo to ensure shuffling happens once and stays consistent
  const shuffleWords  : DataProps[]= useMemo(()=> shuffle(data) , [data]);
  const shufflePics : DataProps[] = useMemo(()=> shuffle(data) , [data]) ;

  const generateInstructions = useCallback((): string => {
    return shuffleWords
      .map(
        (word, index) =>
          `နံပါတ်${englishNumeralToMyanmar((index + 1).toString())} - ${
            word.name_mm
          }`
      )
      .join("\n");
  }, [shuffleWords]);

  return (
    <Box className="flex flex-col gap-4 cursor-pointer">
      <Box
        className="text-md sm:text-lg md:text-[1.20em]"
        onClick={() => {
          speakText(instruction);
          speakText(generateInstructions(), 0.9);
        }}
      >
        {instruction} 
        <VolumeUp className="text-inherit" />
      </Box>

      <Box className="flex flex-wrap items-center justify-between max-w-sm gap-5 mx-auto md:max-w-lg">
        {shufflePics.map((word) => {
          return (
            <Box key={word.id} className="flex flex-col items-center">
              <Image src={word.image_url || '/Logo.png'} width={200} height={200} alt="word-image" className="w-24 md:w-32 md:h-32" />
              <Input className="w-10" type="text" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ListeningSection;
