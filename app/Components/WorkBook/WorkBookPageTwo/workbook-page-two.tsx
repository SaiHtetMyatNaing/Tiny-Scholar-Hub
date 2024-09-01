import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import supabase from "@/app/utils/supabase";
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

    useEffect(()=>{
      async function fetchData() {
        const data  = await supabase
            .from('svg-storage')
            .select('*')
            setItem(data.data);
        }
      fetchData()
    } , [])
  

  return (
    <Box className="border-gray-400  flex flex-col gap-4 justify-center mx-auto max-w-3xl border-[2px] mt-7 p-1 px-3">
      <WorksheetHeader />
        {item && item.length > 0 && item.map((i)=> {
          return (
            <div key={i.id}>
               <Image alt='image' width={200} height={200} src={i.svg_content!}/>
            </div>
          )
        })}
      <MatchingSection />
      <WorkSheetFooter />
    </Box>
  );
};

export default WBPageTwo;
