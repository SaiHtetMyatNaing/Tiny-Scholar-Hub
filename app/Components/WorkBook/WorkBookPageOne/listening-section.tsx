import { Box, Input } from "@mui/material";
import React, { useCallback } from "react";
import Image from "next/image";
import { WordItem } from "@/app/lib/type";
import { englishNumeralToMyanmar } from "@/app/lib/myanmar-numerals";
import { speakText } from "@/app/lib/myanmar-speect";
import {shuffle} from 'lodash'

const ListeningSection = () => {
  const words: WordItem[] = [
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
  ];

  const instruction = "အသံဖိုင်ကို နားထောင်ပြီး ပုံကို နံပါတ်တပ်ပါ။";
  const shuffleWords  : WordItem[]= shuffle(words);
  const shufflePics : WordItem[] = shuffle(words);

  const generateInstructions = useCallback((): string => {
    return shuffleWords
      .map(
        (word, index) =>
          `နံပါတ်${englishNumeralToMyanmar((index + 1).toString())} - ${
            word.item
          }`
      )
      .join("\n");
  }, []);

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
        {/* <VolumeUp className="text-inherit" /> */}
      </Box>

      <Box className="flex flex-wrap items-center justify-between max-w-sm gap-5 mx-auto md:max-w-lg">
        {shufflePics.map((word) => {
          return (
            <Box key={word.id} className="flex flex-col items-center">
              <Image src={word.image} width={200} height={200} alt="word-image" className="w-24 md:w-32" />
              <Input className="w-10" type="text" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ListeningSection;
