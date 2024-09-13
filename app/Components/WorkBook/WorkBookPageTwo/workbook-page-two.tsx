'use client'
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WorksheetHeader from "../workbook-header";
import MatchingSection from "./matching-section";
import WorkSheetFooter from "../workbook-footer";

interface DataRecord {
  created_at: string | null;
  id: number | null;
  name_en: string | null;
  name_mm: string | null;
  start_with: string | null;
  svg_content: string | null;
  updated_at: string | null;
}
const WBPageTwo = () => {
    const [ item , setItem ] = useState<DataRecord[] | null>(null);
  

  return (
    <Box className="border-[#ffd700] rounded-md  flex flex-col gap-4 justify-center mx-auto max-w-3xl border-[2px] mt-7 p-1 px-3">
      <WorksheetHeader />
        {item && item.length && item.length > 0 && item.map((i)=> {
          return (
            <div key={i.id}>
                <Image alt='image' width={200} height={200} className="w-56 h-56"  src='/Logo.png'/>
            </div>
          )
        })}
      <MatchingSection />
      <WorkSheetFooter />
    </Box>
  );
};  

export default WBPageTwo;
