"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { DrawRounded } from "@mui/icons-material";
import LeftDrawer from "./drawer";
import { useRouter } from "next/navigation";
import ClerkAuth from "./clerk-auth";
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react";

export default function TopNavBar() {
  const router = useRouter();
  const pages = [
    { id: 1, title: "Home", path: "/", icon: <DrawRounded /> },
    { id: 2, title: "Workbook", path: "/workbook", icon: <DrawRounded /> },
    { id: 3, title: "Flashcards", path: "/flashcards", icon: <DrawRounded /> },
    { id: 4, title: "Story", path: "/stories", icon: <DrawRounded /> },
    {
      id: 5,
      title: "Lesson Plan",
      path: "/lesson-plan",
      icon: <DrawRounded />,
    },
  ];
  const [isMounted, setIsMounted] = useState(false); // State to track if component has mounted
  // Effect to update mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;  // Return null on server-side and first client-side render
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar className="text-black bg-[#ffd700] backdrop-blur-lg">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, boxShadow: "revert-layer" }}
          >
            <LeftDrawer />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            Tiny Scholar Hub
          </Typography>

          <Box className="flex items-center justify-between max-w-5xl gap-6">
            {pages.map((page, index) => {
              return (
                <Typography
                  key={index}
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontSize: 17,
                  }}
                  className="cursor-pointer underline-on-hover "
                  onClick={() => router.push(page.path)}
                >
                  {page.title}
                </Typography>
              );
            })}
            <ClerkAuth />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
