"use client";
import { Box } from "@mui/material";
import WorksheetHeader from "../workbook-header";
import WordSearchTemplate from "./word-search-section";
import PictionarySection from "./pictionary-section";
import WorkSheetFooter from "../workbook-footer";
import ListeningSection from "./listening-section";
import MatchingSection from "../WorkBookPageTwo/matching-section";
import { DataProps } from "@/app/store/useFlashcardData";

const WBPageOne = ({
  character,
  data,
}: {
  character: string;
  data: DataProps[];
}) => {
  return (
    <Box className="border-[#ffd700] rounded-md flex flex-col gap-4 justify-center mx-auto max-w-3xl border-[2px] mt-7 p-1 px-3">
      <WorksheetHeader />

      <Box className="flex flex-wrap  gap-5 sm:flex-nowrap">
        <WordSearchTemplate word={character} />
        <PictionarySection data={data} />
      </Box>
      <MatchingSection character={character}/>
      <WorkSheetFooter />
    </Box>
  );
};

export default WBPageOne;
