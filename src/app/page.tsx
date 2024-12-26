"use client";
import { Route, routeStatus, transitTo } from "@/data/routes";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { extendedColors } from "../../tailwind.config";
import { useSwapPage } from "@/context/TransitContext";
import { useCompletion } from "@/context/CompletionContext";

function getStripingStyle(
  color: string,
  stripeWidth: number,
  transparentWidth: number
) {
  return {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      ${color} 0,
      ${color} ${stripeWidth}px,
      transparent ${stripeWidth}px,
      transparent ${stripeWidth + transparentWidth}px
    )`,
  };
}

export default function Home() {
  const { setSwapPage } = useSwapPage();
  const { completion } = useCompletion();
  const color = extendedColors[routeStatus.present as Route].secondary;
  return (
    <>
      {/* hero section */}
      <div className="h-full flex flex-col items-center justify-center">
        <div className="h-[60vh]">
          <div className="w-96 h-96 relative z-0 ">
            {/* Image Animation */}
            {completion && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }} // Ensure the image starts invisible and small
                animate={
                  { scale: [0, 1.2, 0.9, 1], opacity: [0, 1] } // Bounce effect with fade-in
                }
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.17, 0.67, 0.83, 0.67], // Easing for bounce
                }}
                className="w-full h-full relative z-20" // Ensure image is always above
              >
                <Image
                  src={"/home-me.png"}
                  alt="cartoon img"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                  className="object-contain relative"
                  priority
                />
              </motion.div>
            )}
            {/* Stripe Background Animation */}
            {completion && (
              <motion.div
                initial={{ x: "-100%", y: "-33%", opacity: 0 }} // Start off-screen and invisible
                animate={completion ? { x: "50%", y: "-33%", opacity: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: "easeInOut", // Smooth slide-in
                }}
                className="w-80 h-52 rounded-md absolute top-1/2 right-1/2 z-10" // Ensure stripe is below image
                style={getStripingStyle(color, 10, 10)}
              ></motion.div>
            )}
          </div>
          {/* Hero Text Animations */}
          {completion && (
            <motion.h1
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                easeIn,
              }}
              className="text-center p-6 text-5xl"
            >
              Hello Dear, I am <br /> <span className="font-bold">Rahat</span>
            </motion.h1>
          )}
        </div>
        <div className="flex-grow flex flex-col">
          {completion ? (
            <motion.h4
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                easeIn,
                delay: 2,
              }}
              className="font-semibold text-gray-400 text-base tracking-[0.3em] mr-4"
            >
              SCROLL
            </motion.h4>
          ) : (
            <div className="opacity-0 font-semibold text-base tracking-[0.3em] mr-4">
              SCROLL
            </div>
          )}
          <div className="border-r border-home-primary flex-grow mt-2"></div>
        </div>
      </div>
      {/* Call to action section */}
      <div className="flex-shrink-0 mt-28 p-6">
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
          {"Let's rock"} <br />
          together <span className="text-6xl text-home-secondary">.</span>
          <br />
          <div className="mt-3 border-b-4 border-home-secondary w-[30%]"></div>
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
            Lorem <span className="text-lg font-semibold">ipsum</span> dolor sit
            amet consectetur adipisicing elit. Ipsam quidem necessitatibus odio
            veritatis dolores officiis{" "}
            <span className="text-lg font-semibold">ipsum</span> accusamus
            eveniet cum numquam veniam aperiam repellendus id{" "}
            <span className="text-lg font-semibold">ipsum</span> facere
            recusandae nihil a, rem possimus fugit.
          </p>
          <button
            onClick={() => transitTo("work", setSwapPage)}
            className="mt-8 py-3 px-6 border-2 border-home-lining text-home-lining rounded-lg text-xl font-bold"
            style={getStripingStyle(color, 4, 5)}
          >
            About my approach
          </button>
        </motion.div>
      </div>
      {/* Signature Poem */}
      <div className="mt-28 w-full ">
        <div className="text-center w-fit mx-auto">
          <h1 className="text-home-primary text-5xl font-semibold border-b-4 border-home-secondary">
            {"Mind's Play"}
          </h1>
          <h3 className="text-right text-lg font-bold mt-2 text-home-lining">
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
          className="w-full flex justify-center items-center"
        >
          <p className="italic text-home-primary my-8 text-balance leading-loose font-medium">
            <span className="text-5xl font-bold mr-2 align-middle">“</span>
            Nothing is easy, nothing is hard! <br />
            {"It's"} you who choose to play your card.
            <br />
            The brain is dumb, the brain is silly, <br />
            Where subconscious rules
            <br />
            and conscious gets chilly.
            <br />
            So why lose the game of mind? <br />
            Hurry up and make me sign!
            <span className="text-5xl font-bold ml-4 align-middle">”</span>
          </p>
        </motion.div>
      </div>
    </>
  );
}
