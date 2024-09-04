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

  const handleScrollChange = React.useCallback((latest: number) => {
    if (fadePosition! < 50) setFadePosition(latest);
  }, []); // The callback will only be recreated if dependencies change
  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <Box className="flex max-w-6xl gap-4 sm:mt-14 md:mt-0 flex-wrap items-center  mx-auto p-2">
      <Typography
        component={motion.header}
        initial={{ opacity: 0 }}
        animate={fadePosition! > 50 ? { opacity: 0 } : { opacity: 1  }}
        transition={{duration : 1}}
        className="w-full text-center text-xl sm:text-2xl md:text-3xl text-black/25">
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
              transition={{ duration: 1}}
              whileHover={{ scale : 0.94  }}
              className="flex mx-auto items-center overflow-hidden  select-none border cursor-pointer rounded-xl border-[#f5c13d] justify-center object-contain gap-1 flex-col"
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
