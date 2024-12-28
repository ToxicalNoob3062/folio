"use client";
import { easeIn, motion } from "framer-motion";
import Text from "./Bold";
import { routeStatus } from "@/extras/routes";

export default function Intro({
  heading,
  content,
  children,
  lining,
  direct,
}: {
  heading: string;
  content: string;
  children?: React.ReactNode;
  lining?: boolean;
  direct?: boolean;
}) {
  const headingProps = direct
    ? {
        animate: {
          x: 0,
          opacity: 1,
        },
      }
    : {
        whileInView: {
          x: 0,
          opacity: 1,
        },
        viewport: {
          once: true,
          amount: "all",
        },
      };

  const contentProps = direct
    ? {
        animate: {
          y: 0,
          opacity: 1,
        },
      }
    : {
        whileInView: {
          y: 0,
          opacity: 1,
        },
        viewport: {
          once: true,
          amount: 0.5,
        },
      };
  return (
    <div className="p-6">
      <motion.h1
        initial={{
          x: 50,
          opacity: 0,
        }}
        {...headingProps}
        transition={{
          duration: 0.5,
          easeIn,
        }}
        className="text-5xl font-semibold w-72"
      >
        {heading}
        <span
          className={`text-6xl text-${routeStatus.present}-${
            lining ? "lining" : "secondary"
          }`}
        >
          .
        </span>
        <br />
        <div
          className={`mt-3 border-b-4 border-${routeStatus.present}-${
            lining ? "lining" : "secondary"
          } w-[30%]`}
        ></div>
      </motion.h1>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        {...contentProps}
        transition={{
          duration: 0.5,
          delay: direct ? 0.5 : 0,
          easeIn,
        }}
      >
        <div className="pt-6 text-xl leading-relaxed">
          <Text txt={content} />
        </div>
        {children ? children : null}
      </motion.div>
    </div>
  );
}
