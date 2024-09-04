import type { Metadata } from "next";
import TopNavBar from "../Components/top-nav-bar";

export const metadata: Metadata = {
  title: "Tiny Scholar Hub | Workbook",
  description: "Educational Platform",
};

export default function WorkBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
          <section className="mt-16 mx-auto max-w-8xl px-2">
            {children}
        </section>
      </main>
  );
}
