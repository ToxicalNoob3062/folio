"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";
import HamBurger from "@/components/common/Ham";
import { useState } from "react";
import Navbar from "@/components/common/Navbar";
import { motion } from "framer-motion";

const bitter = localFont({
  src: "./fonts/Bitter.ttf",
  variable: "--font-bitter",
  weight: "100 900",
});
const bitterItalics = localFont({
  src: "./fonts/Bitter-Italics.ttf",
  variable: "--font-bitter-italics",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  let route = usePathname().split("/")[0];
  route = route === "" ? "home" : route;
  console.log(route);
  const bg = isOpen ? `bg-${route}-secondary` : `bg-${route}-bg`;
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${bitterItalics.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3 flex flex-col`}
      >
        <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} bgColour={bg} />
        {isOpen ? (
          <motion.div
            className={`w-full h-full bg-${route}-secondary`}
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <Navbar route={route} />
          </motion.div>
        ) : (
          <div className={`bg-${route}-bg flex-grow overflow-scroll hide-bars`}>
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
