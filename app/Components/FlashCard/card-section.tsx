"use client";
import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type CharProps = {
  character : string,
  character_id: number;
};

const CardComponent = ({ data } : {data :CharProps[]}) => {

  const uniqueCharacters = Array.from(
    new Set(data.map((item) => item.character_id))
  ).map((character) => {
    return data.find((item) => item.character_id === character);
  });

  
  return (
    <Container className="flex w-full items-center select-none justify-between gap-3 max-w-5xl flex-wrap">
      <Typography
        component={motion.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full text-center z-10 left-0 text-xl mt-3 mb-4 sm:text-2xl md:text-3xl text-black/25"
      >
        {"Alphabet Learning Cards"}
      </Typography>
      {data &&
        uniqueCharacters.map((character ,i) => {
          
          return (
            <Paper
              component={motion.div}
              elevation={3}
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 * 1 }}
              whileHover={{ scale: 0.9 }}
              className="max-w-md text-md text-center shadow-sm flex z-10  mx-auto border-[#ffd700] border rounded-md overflow-hidden   items-start justify-center w-[13.5em] h-[15em]"
            >
              <Link
                key={i}
                href={`/flashcards/${character?.character_id}`}
                className="cursor-pointerhover:scale-105 flex  flex-col transform transition-all"
              >
                <Image
                  src="/caterpillar_က.png"
                  alt="crane_picture"
                  className="object-cover"
                  width={200}
                  height={200}
                />
                <Box className="text-xl">{character?.character}</Box>
              </Link>
            </Paper>
          );
        })}
    </Container>
  );
};

export default CardComponent;
