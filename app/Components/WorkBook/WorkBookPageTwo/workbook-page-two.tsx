'use client'
import { Box } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import WorksheetHeader from "../workbook-header";
import WorkSheetFooter from "../workbook-footer";
import ListeningSection from "../WorkBookPageOne/listening-section";
import { DataProps } from "@/app/store/useFlashcardData";
import FillInTheBlankSection from "./fill-in-the-blank-section";


const WBPageTwo = ({  data , char} : {  data : DataProps[] , char : string}) => {
    const [ item , setItem ] = useState<DataProps[] | null>(null);
    
  return (
    <Box className="border-[#ffd700] rounded-md  flex flex-col gap-4 justify-center mx-auto max-w-3xl border-[2px] mt-7 p-1 px-3">
      <WorksheetHeader />
        {item && item.length && item.length > 0 && item.map((i)=> {
          return (
            <div key={i.character_id}>
                <Image alt='image' width={200} height={200} className="w-56 h-56"  src='/Logo.png'/>
            </div>
          )
        })}
        {data && <ListeningSection data={data}/>}
        {char && <FillInTheBlankSection char={char}/>}
      <WorkSheetFooter />
    </Box>
  );
};  

export default WBPageTwo;
