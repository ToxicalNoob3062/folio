"use client";
import { useSwapPage } from "@/context/TransitContext";
import { Route, routeStatus } from "@/data/routes";
import { motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";
import { extendedColors } from "../../../tailwind.config";

export default function Transition() {
  const router = useRouter();
  const { swapPage, setSwapPage } = useSwapPage();
  const [scope, animate] = useAnimate();

  return swapPage ? (
    <motion.div
      ref={scope}
      className={`bg-${routeStatus.past}-secondary absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center`}
      initial={{ top: "-100%" }}
      animate={{ top: "0%" }}
      transition={{ duration: 0.5 }}
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
        await new Promise((resolve) => setTimeout(resolve, 300));
        await animate(scope.current, { top: "100%" }, { duration: 0.5 });
        setSwapPage(false);
      }}
    ></motion.div>
  ) : null;
}
