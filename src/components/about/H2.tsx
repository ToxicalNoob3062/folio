import { routeStatus } from "@/extras/routes";
import { easeIn, motion } from "framer-motion";

export default function H2({ text }: { text: string }) {
  return (
    <h2 className="text-4xl xl:text-5xl font-bold">
      {text}
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          easeIn,
        }}
        viewport={{
          once: true,
          amount: "all",
        }}
        className={`text-5xl inline-block ml-2 text-${routeStatus.present}-highlight`}
      >
        .
      </motion.span>
      <br />{" "}
      <motion.span
        initial={{
          x: 80,
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
          ease: "easeIn",
        }}
        className={`w-[20%] inline-block border-b-4 border-${routeStatus.present}-highlight`}
      ></motion.span>
    </h2>
  );
}
