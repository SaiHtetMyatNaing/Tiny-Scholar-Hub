"use client";
import { myanmarAlphabet } from "@/app/lib/myanmar-alphabet";
import { StorySegmentProps } from "@/app/lib/type";
import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type StoryCardProps = {
  story_id: number;
  image_url: string;
  title: string;
};

const StoryCards = ({ data }: { data: StoryCardProps[] }) => {
  const uniqueStories = Array.from(
    new Set(data.map((item) => item.story_id))
  ).map((story_id) => {
    return data.find((item) => item.story_id === story_id);
  });

  console.log(uniqueStories);

  return (
    <Container className="flex w-full items-center select-none justify-between gap-3 max-w-5xl flex-wrap">
      <Typography
        component={motion.header}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full text-center z-10 left-0 text-xl mt-3 mb-4 sm:text-2xl md:text-3xl text-black/25"
      >
        {"Story Quests"}
      </Typography>
      {uniqueStories &&
        uniqueStories.length > 0 &&
        uniqueStories.map((story, i) => {
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
                href={`/stories/${story?.story_id}`}
                className="cursor-pointerhover:scale-105 flex  flex-col transform transition-all"
              >
                {story?.image_url && (
                  <Image
                    src={story.image_url}
                    alt="crane_picture"
                    className="object-cover"
                    width={200}
                    height={200}
                  />
                )}
                <Box className="text-xl">{story?.title}</Box>
              </Link>
            </Paper>
          );
        })}
    </Container>
  );
};

export default StoryCards;
