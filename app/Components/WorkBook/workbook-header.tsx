"use client";
import MainIcon from "@/public/icons/Logo";
import { Box, Input, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const WorksheetHeader = () => {
  return (
    <Box className="flex items-center  justify-between  max-w-full mt-6 mb-4">
      <Box className="flex gap-3 -skew-x-6">
        <Box className="w-10 h-10">
          <MainIcon fill="rgb(0 0 0 / 0.55)" />
        </Box>
        <Typography noWrap className="text-[1.3em] text-black/55 self-end mt-5 cursor-pointer">
          Tiny Scholar Hub
        </Typography>
      </Box>

      <Box className="flex flex-col gap-2 text-sm sm:flex-row md:text-xl">
        <Input type="text" placeholder="အမည်"></Input>
        <Input type="text" placeholder="နေ့စွဲ"></Input>
      </Box>
    </Box>
  );
};

export default WorksheetHeader;
