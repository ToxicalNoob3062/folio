"use client";
import { useSwapPage } from "@/context/TransitContext";
import { routeStatus } from "@/extras/routes";
import { motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { extendedColors } from "../../../tailwind.config";
import { useCompletion } from "@/context/CompletionContext";
import { Route } from "@/extras/types";
import { Dispatch, SetStateAction } from "react";

export default function Transition({
  setReloaded,
}: {
  setReloaded: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { swapPage, setSwapPage } = useSwapPage();
  const [scope, animate] = useAnimate();
  const { setCompletion } = useCompletion();

  return swapPage ? (
    <motion.div
      ref={scope}
      className={`bg-${routeStatus.past}-secondary absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center`}
      initial={{ top: "-100%" }}
      animate={{ top: "0%" }}
      transition={{ duration: 0.5 }}
      onAnimationStart={() => {
        setCompletion(false); //page transition has started set the complete to false
      }}
      onAnimationComplete={async () => {
        router.push(
          routeStatus.present !== "home" ? `/${routeStatus.present}` : "/"
        );
        await animate(
          scope.current,
          {
            backgroundColor:
              extendedColors[routeStatus.present as Route].secondary,
          },
          { duration: 0.5 }
        );
        //slide down the palete
        setSwapPage(false);
        setReloaded(true);
      }}
    ></motion.div>
  ) : null;
}
