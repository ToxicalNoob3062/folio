"use client";
import { easeIn, motion } from "framer-motion";
import Text from "../common/Bold";
import { routeStatus } from "@/extras/routes";

export default function CallToAction({
  heading,
  content,
  children,
  direct,
}: {
  heading: string;
  content: string;
  children?: React.ReactNode;
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
    <div className="p-6 sm:mx-auto sm:p-4 md:p-0 max-w-screen-sm lg:max-w-none lg:w-1/2 lg:mx-0 lg:p-6">
      <motion.h1
        initial={{
          x: "10%",
          opacity: 0,
        }}
        {...headingProps}
        transition={{
          duration: 0.5,
          easeIn,
        }}
        className="text-4xl xs:text-5xl md:text-6xl 2xl:text-7xl  font-bold w-[90%]"
      >
        {heading}
        <span
          className={`text-5xl xs:text-6xl xl:text-8xl text-${routeStatus.present}-highlight`}
        >
          .
        </span>
        <div
          className={`mt-3 lg:mt-6 xl:mt-8 2xl:mt-10 border-b-4 border-${routeStatus.present}-highlight w-[30%]`}
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
        <div className="pt-6 xl:pt-8 2xl:pt-10 text-md  xs:text-xl xl:text-2xl font-medium">
          <Text className="leading-relaxed" txt={content} />
        </div>
        {children ? children : null}
      </motion.div>
    </div>
  );
}
