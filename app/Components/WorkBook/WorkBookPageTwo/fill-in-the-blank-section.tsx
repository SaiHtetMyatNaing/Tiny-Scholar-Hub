"use client";
import { getNextTwo, getPreviousTwo } from "@/app/lib/myanmar-alphabets";
import { speakText } from "@/app/lib/myanmar-speect";
import { VolumeUp } from "@mui/icons-material";
import { Box, Container, TextField } from "@mui/material";
import React from "react";

const FillInTheBlankSection = ({ char }: { char: string }) => {
  const myanmarAlphabet = [
    "က", // ka
    "ခ", // kha
    "ဂ", // ga
    "ဃ", // gha
    "င", // nga
    "စ", // ca
    "ဆ", // cha
    "ဇ", // ja
    "ဈ", // jha
    "ည", // nya
    "ဋ", //ṭa
    "ဌ", //ṭha
    "ဍ", //ḍa
    "ဎ", //ḍha
    "ဏ", //ṇa
    "တ", // ta
    "ထ", // tha
    "ဒ", // da
    "ဓ", // dha
    "န", // na
    "ပ", // pa
    "ဖ", // pha
    "ဗ", // ba
    "ဘ", // bha
    "မ", // ma
    "ယ", // ya
    "ရ", // ra
    "လ", // la
    "ဝ", // wa
    "သ", // sa
    "ဟ", // ha
    "ဠ", // ḷa
    "အ", // a
  ];
  const question = "အောက်ပါကွက်လပ်များကို ဖြည့်ပါ။";

  const firstBlank = getPreviousTwo(char, myanmarAlphabet);
  const secondBlank = getNextTwo(char, myanmarAlphabet);

  return (
    <Container className="flex flex-col gap-10 justify-between h-full cursor-pointer select-none">
      <Box className="h-10 cursor-pointer w-full text-md sm:text-lg md:text-xl group md:h-10 mt-3">
        {question}{" "}
        <VolumeUp
          className="group-hover:text-gray-500"
          onClick={() => speakText(question)}
        />
      </Box>

      {firstBlank && firstBlank.length === 2 && (
        <Box className="flex justify-between items-center h-[4em] gap-3">
          {firstBlank
            .slice()
            .reverse()
            .map((item, i) => {
              return (
                <Box
                  key={i}
                  className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 border  border-[#f5c13d]"
                >
                  {item}
                </Box>
              );
            })}

          <Box className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 ">
            <TextField
              id="standard-basic"
              variant="standard"
              className="h-full py-6 text-4xl"
            />
          </Box>
        </Box>
      )}
      {firstBlank && firstBlank.length === 2 && (
        <Box className="flex justify-between items-center h-[4em] gap-3">
          <Box className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 ">
            <TextField
              id="standard-basic"
              variant="standard"
              className="h-full py-6"
            />
          </Box>

          {firstBlank.map((item, i) => {
            return (
              <Box
                key={i}
                className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 border  border-[#f5c13d]"
              >
                {item}
              </Box>
            );
          })}
        </Box>
      )}

      

      {secondBlank && secondBlank.length === 2 && (
        <Box className="flex justify-between items-center h-[4em] gap-3">
          <Box className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 ">
            <TextField
              id="standard-basic"
              variant="standard"
              className="h-full py-6 text-4xl"
            />
          </Box>
          {secondBlank
            .slice()
            .reverse()
            .map((item, i) => {
              return (
                <Box
                  key={i}
                  className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 border  border-[#f5c13d]"
                >
                  {item}
                </Box>
              );
            })}
        </Box>
      )}

      {secondBlank && secondBlank.length === 2 && (
        <Box className="flex justify-between items-center h-[4em] gap-3">
          {secondBlank.map((item, i) => {
            return (
              <Box
                key={i}
                className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 border  border-[#f5c13d]"
              >
                {item}
              </Box>
            );
          })}
          <Box className="h-full w-[4em] max-w-sm text-center py-1 text-4xl rounded-md px-1 ">
            <TextField
              id="standard-basic"
              variant="standard"
              className="h-full py-6 text-4xl"
            />
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default FillInTheBlankSection;
