"use client";
import { useCompletion } from "@/context/CompletionContext";
import { usePageLoading } from "@/context/PageloadContext";
import { Route } from "@/extras/types";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function Greeter({
  setReloaded,
  route,
}: {
  route: Route;
  setReloaded: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCompletion } = useCompletion();
  const { isPageLoading } = usePageLoading();

  return (
    <motion.div
      className={`bg-${route}-secondary absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center`}
      initial={{ top: "0%" }}
      animate={{ top: isPageLoading ? "0%" : "100%" }}
      transition={{ duration: isPageLoading ? 0 : 0.5, delay: 0.5 }}
      onAnimationStart={() => {
        setCompletion(false); //page transition has started set the complete to false
      }}
      onAnimationComplete={async () => {
        if (!isPageLoading) {
          setReloaded(false);
          setCompletion(true); //page transition has completed set the complete to true
        }
      }}
    >
      <span className="loader"></span>
    </motion.div>
  );
}
