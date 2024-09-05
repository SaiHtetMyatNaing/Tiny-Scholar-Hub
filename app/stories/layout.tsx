import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiny Scholar Hub | Stories",
  description: "Educational Platform",
};

export default function FlashCardsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <section className="mt-20 px-2 mx-auto max-w-full w-full">
            {children}
        </section>
      </>
  );
}
