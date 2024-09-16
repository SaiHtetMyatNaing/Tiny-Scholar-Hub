import type { Metadata } from "next";
import TopNavBar from "../Components/top-nav-bar";


export const metadata: Metadata = {
  title: "Tiny Scholar Hub | Lesson Plan",
  description: "Educational Platform",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <section className="mt-20 px-2 mx-auto max-w-full w-full">
            {children}
        </section>
  );
}
