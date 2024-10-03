'use client'
import React, { ReactNode, useState } from "react";
import { speakText } from "@/app/lib/myanmar-speect";
import Image from "next/image";
import { Box } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';
import { DataProps } from "@/app/store/useFlashcardData";


const PictionarySection = ({data} : {data : DataProps[]}) => {

  const questions = "အောက်ပါစကားလုံးများကို အသံထွက်ဖတ်ပါ။";

  function colorFirstChar(str: string): ReactNode {
    const firstChar =  str.charAt(0);
    const restOfStr =  str.substring(1);
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
      {data && data.map((item) => {
        return (
          <Grid
            size={4}
            key={item.id}
            onClick={() => speakText(item.name_mm)}
            className="text-[16px] mt-6"
          >
            <Image src={item.image_url || '/Logo.png'} alt="word-image" height={100} width={100} className="w-20  h-20 cursor-pointer sm:w-24 sm:h-24" />
            <span className="sm:text-[1em]">{colorFirstChar(item.name_mm)}</span>
          </Grid>
        );
      })}
      </Grid>
    </Box>
  );
};

export default PictionarySection;
