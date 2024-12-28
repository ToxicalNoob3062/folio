import { useCompletion } from "@/context/CompletionContext";
import { easeIn, motion } from "framer-motion";

export default function ScrollIndicator({ delay }: { delay?: number }) {
  const { completion } = useCompletion();
  return (
    <div className="flex-grow flex flex-col items-center justify-center ">
      {completion && (
        <>
          <motion.h4
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: delay || 0,
              easeIn,
            }}
            className="font-semibold text-gray-400 text-base tracking-[0.3em] mr-4 wave-container"
          >
            {["S", "C", "R", "O", "L", "L"].map((letter, index) => (
              <span className="wave-letter" key={index}>
                {letter}
              </span>
            ))}
          </motion.h4>
          <div className="flex-grow mt-2 relative">
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{
                duration: 1,
                delay: (delay || 0) + 0.5,
                ease: "easeInOut",
              }}
              className="border-r border-home-primary absolute bottom-0"
            ></motion.div>
          </div>
        </>
      )}
    </div>
  );
}
