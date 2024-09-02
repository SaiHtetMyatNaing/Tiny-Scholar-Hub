import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Lexend } from "next/font/google";

import TopNavBar from "./Components/top-nav-bar";
import Whiteboard from "./Components/whiteboard";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Scholar Hub",
  description: "Educational Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <TopNavBar />
          <div className="w-full max-w-full">
            {children}
          </div>
          <Whiteboard />
        </body>
      </ClerkProvider>
    </html>
  );
}
