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
    <div className="w-full h-20 p-6 sm:h-32 sm:p-10 ws:h-20 ws:p-6 flex justify-between items-center z-30 relative">
      <div className="flex h-full items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-11 h-11 sm:w-16 sm:h-16"
        >
          <Img src={`/icon-${route}.png`} alt="Logo" />
        </motion.div>
        <div
          className={`h-full ml-2 mr-4 border-r-2 border-${route}-primary`}
        ></div>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.button
              key="close"
              whileHover={{ scale: 1.1 }}
              className="tracking-widest text-md sm:text-lg font-semibold"
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
              className="tracking-widest text-md sm:text-lg font-semibold"
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
      <div className="flex h-full items-center sm:gap-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative hidden sm:w-12 sm:h-12 sm:block"
        >
          <Img src={`/hire-${route}.png`} alt="Logo" />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="tracking-widest text-md sm:text-lg  font-semibold"
        >
          HIRE ME
        </motion.button>
      </div>
    </div>
  );
}
