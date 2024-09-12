"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Typography } from "@mui/material";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Cards() {
  const items = [
    { id: 1, label: "Workbook", link: "/home/workbook.png" },
    { id: 2, label: "Lesson Plan", link: "/home/lessonplan.png" },
    { id: 3, label: "Story", link: "/home/story.png" },
    { id: 4, label: "Flashcards", link: "/home/flashcards.png" },
  ];
  const { scrollY } = useScroll(); // Track Scroll position
  const [fadePosition, setFadePosition] = React.useState<number>(0);

  const handleScrollChange =(latest: number) => {
    if (fadePosition! < 50) setFadePosition(latest);
    if (fadePosition! > 50) setFadePosition(latest);
  }; 

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <Box className="flex max-w-6xl gap-4 sm:mt-14 md:mt-0 flex-wrap items-center  mx-auto p-2">
      <Typography
        component={motion.header}
        initial={{ opacity: 0 }}
        animate={fadePosition! > 50 ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          width: "100%", // w-full
          textAlign: "center", // text-center
          fontSize: "1.5rem", // text-xl
          "@media (min-width: 640px)": {
            // sm:text-2xl
            fontSize: "1.75rem",
          },
          "@media (min-width: 768px)": {
            // md:text-3xl
            fontSize: "2rem",
          },
        }}
        className=" text-black/25"
      >
        {"Explore Our Learning Resources"}
      </Typography>

      <Box className="flex mt-3 items-center flex-wrap justify-between gap-2 ">
        {items.map((item, i) => {
          return (
            <Paper
              component={motion.div}
              elevation={3}
              key={i}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
              whileHover={{ scale: 0.9 }}
              sx={{
                display: 'flex',
                mx: 'auto',
                alignItems: 'center',
                overflow: 'hidden',
                userSelect: 'none',
                border: '1px solid #f5c13d',
                cursor: 'pointer',
                borderRadius: '12px',
                justifyContent: 'center',
                objectFit: 'contain',
                gap: '4px',
                flexDirection: 'column',
              }}
            >
              <Box className="h-60  w-[17em]">
                <Image
                  src={item.link}
                  alt="flashcards"
                  width={300}
                  className="w-full h-full"
                  height={400}
                  priority
                />
              </Box>

              <Typography className="mb-5" variant="h5">
                {item.label}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
}
