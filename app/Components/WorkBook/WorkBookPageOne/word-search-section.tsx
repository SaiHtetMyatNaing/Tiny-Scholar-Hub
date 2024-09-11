"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { myanmarAlphabet } from "@/app/lib/myanmar-alphabet";
import { speakText } from "@/app/lib/myanmar-speect";
import { VolumeUpRounded } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const WordSearchTemplate = ({ word }: { word: string }) => {
  const numbers = Array.from({ length: 30 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [randomAlphabets, setRandomAlphabets] = useState<string[]>([]); // Initialize as empty a
  // Generate 10 random indices to place "က"
  const selectedIndices = useMemo(() => {
    const indices = new Set();
    while (indices.size < 6) {
      const newIndex = Math.floor(Math.random() * numbers.length);
      indices.add(newIndex);
    }
    return Array.from(indices);
  }, [numbers]);

  useEffect(() => {
    // Generate randomAlphabets after the initial render
    const alphabets = numbers.map((_, index) =>
      selectedIndices.includes(index)
        ? word
        : myanmarAlphabet[Math.floor(Math.random() * myanmarAlphabet.length)]
    );
    setRandomAlphabets(alphabets);
  }, [selectedIndices , word , numbers]);

  //handle hover
  const handleMouseOver = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  //handle answers
  const handleCheckAnswer = (index: number) => {
    if (randomAlphabets[index] === word) {
      setCorrectAnswers([...correctAnswers, index]);
    }
  };

  //handle read instruction
  const handleReadInstruction = useCallback(() => {
    speakText(` ${word}ကိုရှာပြီးဝိုင်းပါ`, 0.8);
  }, [word]);

  return (
    <Box className="max-w-md w-max px-2 mt-4 flex flex-col gap-4 ">
      <Box
        onClick={handleReadInstruction}
        className="h-10 cursor-pointer w-full text-md sm:text-lg md:text-xl group md:h-10"
      >
        {`${word} ကိုရှာပြီး ဝိုင်းပါ။`}
        <VolumeUpRounded className="group-hover:text-gray-500" />
      </Box>

      <Grid container className="max-w-lg">
        {randomAlphabets.length ? (
          numbers.map((_, index) => {
            return (
              <Grid
                size={2}
                key={index}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => handleMouseOut()}
                onClick={() => handleCheckAnswer(index)}
                className={`
                flex items-center h-[3em] sm:h-[4em] border-[1px] border-black text-black tranform select-none  justify-center cursor-pointer 
                ${hoveredIndex === index && "bg-gray-200"}`}
              >
                <Box
                  className={`text-center
                   ${
                     correctAnswers.includes(index) &&
                     "bg-blue-200 rounded-full w-[1em] h-[1em] sm:w-11 sm:h-11 sm:py-2"
                   }`}
                >
                  {randomAlphabets[index]}
                </Box>
              </Grid>
            );
          })
        ) : (
          <Skeleton variant="rounded" width={300} height={315} />
        )}
      </Grid>
    </Box>
  );
};

export default WordSearchTemplate;
