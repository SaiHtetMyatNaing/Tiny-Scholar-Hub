'use client'
import React, { ReactNode, useState } from "react";
import { WordItem } from "@/app/lib/type";
import { speakText } from "@/app/lib/myanmar-speect";
import Image from "next/image";
import { Box } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';


const PictionarySection = () => {
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
  const questions = "အောက်ပါစကားလုံးများကို အသံထွက်ဖတ်ပါ။";

  function colorFirstChar(str: string): ReactNode {
    const firstChar = str.charAt(0);
    const restOfStr = str.substring(1);
    return (
      <div>
        <span className="text-red-500">{firstChar}</span>
        {restOfStr}
      </div>
    );
  }

  return (
    <Box
      className="mt-4 ml-2 md:ml-0 flex-col gap-10  sm:flex-nowrap md:max-w-lg flex-wrap" >
      <Box
        onClick={() => speakText(questions)}
        className="cursor-pointer w-full  sm:ml-0 text-lg sm:text-xl md:text-[1.2em]"
      >
        {questions} 
        <VolumeUp />
      </Box>

      <Grid container className='mx-auto'>
      {words.map((word) => {
        return (
          <Grid
            size={4}
            key={word.id}
            onClick={() => speakText(word.item)}
            className="text-[16px] mt-6"
          >
            <Image src={word.image} alt="word-image" height={100} width={100} className="w-20 cursor-pointer sm:w-24" />
            <span className="sm:text-[1em]">{colorFirstChar(word.item)}</span>
          </Grid>
        );
      })}
      </Grid>
    </Box>
  );
};

export default PictionarySection;
