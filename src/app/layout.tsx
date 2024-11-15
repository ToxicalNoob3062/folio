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
  const duration = isOpen ? 0.5 : 0;
  const bg = isOpen ? `bg-${route}-secondary` : `bg-${route}-bg`;
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${bitterItalics.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3`}
      >
        <div className={`w-full h-full bg-${route}-bg`}>
          <motion.div
            className={`${bg} text-${route}-primary w-full overflow-hidden`}
            initial={{ height: "30%" }} // Collapse height when closed
            animate={{
              height: isOpen ? "100%" : "30%", // Animate height based on isOpen state
            }}
            transition={{
              duration,
              ease: [0.42, 0, 0.58, 1], // Smooth transition
            }}
          >
            {/* Rendering HamBurger first to ensure state is maintained */}
            <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Conditionally render Navbar or children based on the isOpen state */}
            {isOpen ? (
              <Navbar />
            ) : (
              <>
                {children}
                <Footer />
              </>
            )}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
