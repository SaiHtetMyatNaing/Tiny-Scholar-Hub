'use client'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { DrawRounded } from "@mui/icons-material";
import LeftDrawer from "./drawer";
import { useRouter } from "next/navigation";
import ClerkAuth from "./clerk-auth";

export default function TopNavBar() {
    const router = useRouter();
  const pages = [
    { id: 1, title: "Home", path: "/", icon: <DrawRounded /> },
    { id: 2, title: "Workbook", path: "/workbook", icon: <DrawRounded /> },
    { id: 3, title: "Flashcards", path: "/flashcards", icon: <DrawRounded /> },
    {
      id: 3,
      title: "Lesson Plan",
      path: "/lesson-plan",
      icon: <DrawRounded />,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} className="md:mb-20">
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px ",
        }}
      >
        <Toolbar className="text-black bg-white">
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
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          >
            Scholar Hub
          </Typography>

          <Box className="flex items-center justify-between max-w-5xl gap-6">
            {pages.map((page, index) => {
              return (
                <Typography
                  component="div"
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
            <ClerkAuth/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
