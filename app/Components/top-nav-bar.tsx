"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { DrawRounded } from "@mui/icons-material";
import LeftDrawer from "./drawer";
import ClerkAuth from "./clerk-auth";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function TopNavBar() {
  const pathname = usePathname();
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
  return (
    <Box sx={{ flexGrow: 1  }} className='select-none'>
      <AppBar position="fixed" sx={{ boxShadow: "none" }}>
        <Toolbar className="text-black bg-[#ffd700] backdrop-blur-lg flex justify-between items-center">
          <Box className="flex items-center h-10 justify-between gap-3">
            <LeftDrawer />
            <Link href="/">
              <Typography noWrap className="text-[1em]  cursor-pointer">
                Tiny Scholar Hub
              </Typography>
            </Link>
          </Box>

          <Box className="flex text-black/55 font-bold items-center justify-between max-w-3xl gap-3 ml-1 md:gap-6">
            {pages.map((page, index) => {
              return (
                <Link
                  className={`link ${
                    pathname === page.path ||
                    (pathname === '/' && page.path === '/') ||
                    (page.path !== '/' && pathname.startsWith(page.path))
                      ? "active"
                      : ""
                  } text-gray-900/ hidden sm:block  underline-on-hover`}
                  href={page.path}
                  key={index}
                >
                  <Typography
                    sx={{
                      display: { xs: "none", sm: "block" },
                    }}
                    className="cursor-pointer text-[1em]"
                  >
                    {page.title}
                  </Typography>
                </Link>
              );
            })}
            <ClerkAuth />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
