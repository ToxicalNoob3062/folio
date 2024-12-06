"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import Footer from "@/components/common/Footer";
import HamBurger from "@/components/common/Ham";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/common/Navbar";

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

let prev = "home";
let temp = "home";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //check if navigation is open
  const [isOpen, setIsOpen] = useState(false);

  //get the route from the pathname
  let route = usePathname().split("/")[1];
  route = route === "" ? "home" : route;

  //check if it's the first render
  const isFirstRender = useRef(true);

  // Track previous route
  const [routeChanged, setRouteChanged] = useState(false);
  const [showContent, setShowContent] = useState(true);

  // Check if route has changed and track previous route
  if (temp !== route) {
    setRouteChanged(true);
    prev = temp;
    temp = route;
  }
  // a state when the isOpen is false and the route has changed
  const routeTransitioned = !isOpen && routeChanged;

  // useEffect to check if it's the first render and reset the isFirstRender
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
  }, []);

  console.log(route, prev);

  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${bitterItalics.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3 flex flex-col text-${route}-primary`}
      >
        <div className="relative flex flex-col w-full h-full overflow-hidden">
          <HamBurger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            route={route}
            transitioned={routeTransitioned}
            p_bg={`bg-${prev}-secondary`}
          />

          <AnimatePresence
            onExitComplete={() => {
              setShowContent((prev) => !prev);
            }}
          >
            {isOpen ? (
              <motion.div
                key="navwrap"
                className={`w-full h-full bg-${route}-secondary`}
                initial={{ height: "0%" }}
                animate={{
                  height: "100%",
                  transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1.0] },
                }}
                exit={
                  routeChanged
                    ? {
                        delay: 0.4,
                        opacity: 1,
                      }
                    : {}
                }
              >
                <Navbar route={route} setIsOpen={setIsOpen} />
              </motion.div>
            ) : (
              !isOpen &&
              showContent && (
                <motion.div
                  key="content"
                  className={`bg-${route}-bg flex-grow overflow-scroll hide-bars`}
                >
                  {children}
                  <Footer />
                </motion.div>
              )
            )}
          </AnimatePresence>
          {routeTransitioned ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: isFirstRender.current ? 0 : 0.5,
                duration: isFirstRender.current ? 0 : 0.5,
              }}
            >
              <motion.div
                className={`w-full h-full bg-${route}-secondary absolute top-0 left-0`}
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 0.75,
                  delay: 0.5,
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
