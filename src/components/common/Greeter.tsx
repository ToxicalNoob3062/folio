"use client";
import { Route } from "@/data/routes";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function Greeter({
  setReloaded,
  route,
}: {
  route: Route;
  setReloaded: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      className={`bg-${route}-secondary absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center`}
      initial={{ top: "0%" }}
      animate={{ top: "100%" }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={() => {
        setReloaded(false);
      }}
    >
      <span className="loader"></span>
    </motion.div>
  );
}
