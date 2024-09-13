"use client";
import { LessonPlanProps } from "@/app/types/lesson-plan";
import { Box, Container, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardSection = ({ data }: { data: LessonPlanProps }) => {

  return (
    <Container className="flex w-full items-center select-none justify-between gap-3 max-w-5xl flex-wrap">
      <Paper
        component={motion.div}
        elevation={3}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 * 1 }}
        whileHover={{ scale: 0.9 }}
        className="max-w-md text-md text-center shadow-sm flex z-10  mx-auto border-[#ffd700] border rounded-md overflow-hidden   items-start justify-center w-[13.5em] h-[15em]"
      >
        {data && (
          <Link
            href={`/lesson-plan/${data.id}`}
            className="cursor-pointerhover:scale-105 flex  flex-col transform transition-all"
          >
           {data.thumbnail_url && <Image
              src={data.thumbnail_url ? data.thumbnail_url : '/Logo.png'}
              alt={data?.title}
              className="object-cover"
              width={200}
              height={200}
            />}
            <Box className="text-xl">{data.title}</Box>
          </Link>
        )}
      </Paper>
    </Container>
  );
};

export default CardSection;
