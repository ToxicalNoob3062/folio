"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Route } from "@/extras/routes";
import Image from "next/image";

export default function Header({
  route,
  control,
}: {
  route: Route;
  control: [boolean, (newRoute: Route) => void];
}) {
  const [isOpen, changeRoute] = control;
  return (
    <div className="w-full h-20 p-2 flex justify-between items-center z-30 relative">
      <div className="flex h-full items-center">
        <div className="relative w-11 h-11">
          <Image
            className="object-contain"
            src={`/icon-${route}.png`}
            alt="Signature Icon"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw" // Responsive sizes
            priority
          />
        </div>
        <div
          className={`h-[50%] ml-2 mr-4 border-r-2 border-${route}-primary`}
        ></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.button
              key="close"
              className="tracking-widest text-md font-semibold"
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => changeRoute(route)}
            >
              CLOSE
            </motion.button>
          ) : (
            <motion.button
              key="open"
              className="tracking-widest text-md font-semibold"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => changeRoute(route)}
            >
              MENU
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <button className="tracking-widest text-md font-semibold">HIRE ME</button>
    </div>
  );
}
