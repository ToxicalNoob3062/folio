import { motion } from "framer-motion";
import Text from "./Bold";
import { routeStatus } from "@/data/routes";

export default function Intro({
  heading,
  content,
  children,
}: {
  heading: string;
  content: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <motion.h1
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: "all",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="text-5xl font-semibold w-64"
      >
        {heading}
        <span className={`text-6xl text-${routeStatus.present}-secondary`}>
          .
        </span>
        <br />
        <div
          className={`mt-3 border-b-4 border-${routeStatus.present}-secondary w-[30%]`}
        ></div>
      </motion.h1>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <p className="pt-6 text-xl w-96">
          <Text txt={content} />
        </p>
        {children}
      </motion.div>
    </div>
  );
}
