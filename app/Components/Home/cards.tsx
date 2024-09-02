'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Cards() {
  const items = [
    { id: 1, label: "Flashcards", link: "/home/flashcards.png" },
    { id: 2, label: "Lesson Plan", link: "/home/lessonplan.png" },
    { id: 3, label: "Story", link: "/home/story.png" },
    { id: 4, label: "Workbook", link: "/home/workbook.png" },
  ];

  return (
    <Box className="flex max-w-3xl gap-4 flex-wrap items-center mx-auto">
      <Typography className="w-full text-center text-black/25" variant="h4">
        {"Explore Our Learning Resources"}
      </Typography>

        <Box className='flex w-full max-w-xl mx-auto justify-between gap-3 flex-wrap'>
        {items.map((item, i) => {
        return (
          <Paper
            component={motion.div}
            elevation={3}
            key={i}
            initial={{ opacity: 0  , scale: 0.4 }}
            animate={ { opacity : 1 , scale : 1}}
            transition={ { duration : 1}}
            whileHover={
              {scale: 0.9,
              transition: { duration: 0.1 }}
            }
            className="flex items-center border cursor-pointer border-[#f5c13d] justify-center object-contain gap-2 flex-col"
          >
            <Box className="h-60 w-[17em]">
              <Image
                src={item.link}
                alt="flashcards"
                width={300}
                className="w-full h-full"
                height={400}
              />
            </Box>

            <Typography className="mb-5" variant="h5">
              {item.label}
            </Typography>
          </Paper>
        ); })}
        </Box>
 
    </Box>
  );
}
