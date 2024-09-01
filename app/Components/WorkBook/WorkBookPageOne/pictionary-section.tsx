import { Box, Grid } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { WordItem } from "@/app/lib/type";
import { speakText } from "@/app/lib/myanmar-speect";
import Image from "next/image";


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
    <Grid
      container
      rowGap={2}
      className="mt-3 space-y-2 md:max-w-md sm:space-y-8 md:space-y-6"
    >
      <Box
        onClick={() => speakText(questions)}
        className="cursor-pointer w-full  sm:ml-0 text-md sm:text-lg md:text-[1.20em]"
      >
        {questions} 
        {/* <VolumeUp /> */}
      </Box>
      {words.map((word) => {
        return (
          <Grid
            item
            xs={4}
            key={word.id}
            onClick={() => speakText(word.item)}
            className="text-[16px]"
          >
            <Image src={word.image} alt="word-image" height={200} width={200} className="w-20 cursor-pointer sm:w-24" />
            <span className="sm:text-[1em]">{colorFirstChar(word.item)}</span>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PictionarySection;
