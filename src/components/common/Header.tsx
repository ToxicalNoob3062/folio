"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Route } from "../../extras/types";
import Img from "./Img";

export default function Header({
  route,
  control,
}: {
  route: Route;
  control: [boolean, (newRoute: Route) => void];
}) {
  const [isOpen, changeRoute] = control;
  return (
    <div className="bg-orange-200 w-full h-20 p-6 tab:h-28 tab:p-10 flex justify-between items-center z-30 relative">
      {/* left side */}
      <div className="flex h-full items-center">
        <Img
          id="brand-logo"
          className="w-8 tab:w-12 hover:scale-110"
          src={`/icon-${route}.png`}
          alt={`${route} icon`}
        />
        <div
          id="stick-border"
          className={`h-3/5 tab:h-4/5 ml-2 mr-4 border-r-2 border-${route}-primary`}
        />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.button
              key="close"
              whileHover={{ scale: 1.1 }}
              className="font-sans text-xs font-semibold tracking-widest"
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
              whileHover={{ scale: 1.1 }}
              className="font-sans text-xs font-semibold tracking-widest"
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
      {/* right side */}
      <div className="flex h-full items-center gap-2">
        <Img
          id="hire-logo"
          className="hidden tab:inline-block w-10 hover:scale-110"
          src={`/hire-${route}.png`}
          alt="Logo"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="font-sans text-xs font-semibold tracking-widest"
        >
          HIRE ME
        </motion.button>
      </div>
    </div>
  );
}
