import type { Metadata } from "next";
import TopNavBar from "../Components/top-nav-bar";


export const metadata: Metadata = {
  title: "Tiny Scholar Hub | Stories",
  description: "Educational Platform",
};

export default function StroyCardsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <section className="md:mt-20 px-2 max-w-full w-full">
            {children}
        </section>
  );
}
