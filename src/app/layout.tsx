"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";
import HamBurger from "@/components/common/Ham";
import { useEffect, useRef, useState } from "react";
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
  let route = usePathname().split("/")[1];
  route = route === "" ? "home" : route;
  const prevRoute = useRef(route);

  //track prev route
  const [routeChanged, setRouteChanged] = useState(false);
  useEffect(() => {
    setRouteChanged(true);
    console.log("route changed");
  }, [route]);

  const routeTransitioned = !isOpen && routeChanged;

  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${bitterItalics.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3 text-${route}-primary`}
      >
        <div className="relative flex flex-col w-full h-full overflow-hidden">
          <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} route={route} />
          {isOpen ? (
            <motion.div
              className={`w-full h-full bg-${route}-secondary`}
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <Navbar route={route} setIsOpen={setIsOpen} />
            </motion.div>
          ) : (
            <div
              className={`bg-${route}-bg flex-grow overflow-scroll hide-bars`}
            >
              {children}
              <Footer />
            </div>
          )}

          {routeTransitioned ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
            >
              <motion.div
                className={`w-full h-full bg-${route}-secondary absolute top-0 left-0`}
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 0.85,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                onAnimationComplete={() => {
                  setRouteChanged(false);
                }}
              ></motion.div>
            </motion.div>
          ) : null}
        </div>
      </body>
    </html>
  );
}
