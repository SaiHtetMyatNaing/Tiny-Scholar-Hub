'use client'
import { Grid } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { myanmarAlphabet } from "@/app/lib/myanmar-alphabet";
import { speakText } from "@/app/lib/myanmar-speect";
;

const WordSearchTemplate = ({ word }: { word: string }) => {
  const numbers = Array.from({ length: 30 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);

  // Generate 10 random indices to place "က"
  const selectedIndices = useMemo(() => {
    const indices = new Set();
    while (indices.size < 6) {
      const newIndex = Math.floor(Math.random() * numbers.length);
      indices.add(newIndex);
    }
    return Array.from(indices);
  }, []);

  const randomAlphabets = useMemo(() => {
    return numbers.map((_, index) =>
      selectedIndices.includes(index)
        ? word
        : myanmarAlphabet[Math.floor(Math.random() * myanmarAlphabet.length)]
    );
  }, [selectedIndices]);

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
  }, []);
   
  return (
    <Grid container className="max-w-sm px-2 mt-4 ">
      <Grid
        onClick={handleReadInstruction}
        item
        xs={12}
        className="w-32 h-10 mt-10 cursor-pointer text-md sm:text-lg md:text-xl group md:h-14"
      >
        {`${word} ကိုရှာပြီး ဝိုင်းပါ။`}
        {/* <VolumeUpRounded className="group-hover:text-gray-500" /> */}
      </Grid>

      {numbers.map((_, index) => {
        return (
          <Grid
            xs={2}
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut()}
            onClick={() => handleCheckAnswer(index)}
            item
            className={`
                flex items-center h-[3em] sm:h-[4em] border-[1px] border-black text-black tranform select-none  justify-center cursor-pointer 
                ${hoveredIndex === index && "bg-gray-200"}`}
          >
            <span
              className={`text-center
                   ${
                     correctAnswers.includes(index) &&
                     "bg-blue-200 rounded-full w-[1.7em] h-[1.7em] sm:w-11 sm:h-11 sm:py-2"
                   }`}
            >
              {randomAlphabets[index]}
            </span>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WordSearchTemplate;
