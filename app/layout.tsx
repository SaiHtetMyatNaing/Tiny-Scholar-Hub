import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Lexend } from "next/font/google";
import TopNavBar from "./Components/top-nav-bar";
import Whiteboard from "./Components/whiteboard";
import Head from "next/head";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Scholar Hub",
  description: "Educational Platform",
  icons: {
    icon: "/favicon.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-light.svg"
          sizes="16x16"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/images/favicon-dark.svg"
          sizes="16x16"
          media="(prefers-color-scheme: dark)"
        />
      </head>

      <body className={inter.className}>
        <ClerkProvider>
          <TopNavBar />
          <main className="w-full max-w-full mx-auto">{children}</main>
          <Whiteboard />
        </ClerkProvider>
      </body>
    </html>
  );
}
