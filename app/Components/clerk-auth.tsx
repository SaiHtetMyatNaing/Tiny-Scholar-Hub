'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Box, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { boolean } from "zod";

const ClerkAuth = () => {

  return (
     <>
     <SignedOut>
        <Box
          className="w-20 flex items-center justify-center h-10 rounded-md border-[#f3f0e8] border-2"
          sx={{
            color: "black",
            boxShadow: "none",
            ":hover": {
              backgroundColor: "var(--primary-gold-foreground)",
            },
          }}
        >
          <SignInButton />
        </Box>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: {
                width: "35px",
                height: "35px",
                borderColor: "#f5c13d",
              },
              username: {
                fontSize: "14px",
              },
            },
          }}
        />
      </SignedIn>
      </>)
};

export default ClerkAuth;
