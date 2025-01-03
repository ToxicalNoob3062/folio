"use client";
import { transitTo } from "@/extras/routes";
import { motion } from "framer-motion";
import { useSwapPage } from "@/context/TransitContext";
import HeroSection from "@/components/home/HeroSection";
import CallToAction from "@/components/home/CallToAction";
import Button from "@/components/common/Button";

export default function Home() {
  const { setSwapPage } = useSwapPage();
  return (
    <>
      {/* hero section */}
      <HeroSection />
      {/* Call to action section */}
      <div className="mt-28">
        <CallToAction
          heading={"Let's rock together"}
          content={
            "I am a **versatile software developer** passionate about solving **industry-grade problems** with a **unique touch**. Dedicated to adapting the **best tools** for each project, I strive for **perfection**, embrace **challenges**, and prioritize **client satisfaction**."
          }
        >
          <Button
            onClick={() => transitTo("work", setSwapPage)}
            txt="About my approach"
          >
            Know more
          </Button>
        </CallToAction>
      </div>
      {/* Signature Poem */}
      <div className="mt-28 xl:mt-64 2xl:mt-72 w-full ">
        <div className="text-center w-fit mx-auto">
          <h1 className="text-home-primary text-4xl xs:text-5xl md:text-6xl 2xl:text-7xl  font-bold">
            {"Mind's Play"}
            <br />
            <div className="flex justify-center">
              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "100%",
                  opacity: 0.8,
                }}
                viewport={{
                  once: true,
                  amount: "all",
                }}
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
                className="inline-block border-b-4 border-home-highlight lg:mt-5"
              ></motion.span>
            </div>
          </h1>
          <h3 className="text-right text-lg lg:text-xl xl:text-2xl font-bold mt-2 text-home-lining">
            @ Rahat
          </h3>
        </div>
        <motion.div
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-fit mt-10 mx-auto flex flex-col justify-center items-center font-medium text-md xs:text-xl xl:text-2xl"
        >
          {/* Start Quotation Mark */}
          <div className="w-full flex justify-start items-start">
            <span className="text-5xl font-bold align-top leading-none">“</span>
          </div>

          {/* Poem Content */}
          <p className="w-fit italic text-home-primary my-2 text-md lg:text-xl xl:text-2xl flex flex-col gap-2 lg:gap-4 xl:gap-6 justify-center items-center">
            <span>Nothing is easy, nothing is hard!</span>
            <span>{"It's"} you who choose to play your card.</span>
            <span>The brain is dumb, the brain is silly,</span>
            <span>Where subconscious rules</span>
            <span>and conscious gets chilly.</span>
            <span>So why lose the game of mind?</span>
            <span>Hurry up and make me sign!</span>
          </p>

          {/* End Quotation Mark */}
          <div className="w-full flex justify-end items-end">
            <span className="text-5xl font-bold align-bottom leading-none">
              ”
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
}
