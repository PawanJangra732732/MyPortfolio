import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Navbar1 } from "@/components/Navbar1";
import { IntroductionSection } from "@/components/IntroducitonSection";
import { Skills } from "@/components/skills";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan Jangra Portfolio",
  description: "Working on Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar1/>
        <IntroductionSection/>
        <Skills/>

        {children}
        </body>
    </html>
  );
}
