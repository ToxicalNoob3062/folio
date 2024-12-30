"use client";
import Intro from "@/components/common/Intro";
import ScrollIndicator from "@/components/common/Scroll";
import { useCompletion } from "@/context/CompletionContext";
import { motion } from "framer-motion";
import { extendedColors } from "../../../tailwind.config";
import { routeStatus } from "@/extras/routes";
import Text from "@/components/common/Bold";
import H2 from "@/components/about/H2";
import Banner from "@/components/about/Banner";
import { getDottedStyle } from "@/extras/styles";
import { Route } from "@/extras/types";
import Img from "@/components/common/Img";
import Image from "next/image";

const database = [
  {
    img: "/cat.jpeg",
    alt: "cat",
  },
  {
    img: "/scene.jpg",
    alt: "a nice view",
  },
];

export default function About() {
  const { completion } = useCompletion();
  const color = extendedColors[routeStatus.present as Route];
  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8">
        {completion && (
          <Intro
            heading={"About me"}
            content="I'm a **developer**, **designer** and **linguist** who has been building for the web in some capacity since 2001. I specialise in accessibility, performance and usability without sacrificing creativity."
            direct
          />
        )}
        <ScrollIndicator delay={1} />
      </div>
      <div className="flex flex-col justify-center items-center relative z-0 mt-28 gap-12">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            boxShadow: "0 0 0px #1c494c", // No shadow initially
          }}
          whileInView={{
            scale: 1, // Final scale
            opacity: 1,
            boxShadow: "0 0 25px 8px rgba(28, 73, 76, 0.4)", // Final shadow
          }}
          viewport={{
            once: true,
            amount: 0.4, // Trigger the animation when 40% of the element is in view
          }}
          transition={{
            type: "spring", // Use spring transition
            stiffness: 200, // Adjust stiffness for stronger spring effect
            damping: 10, // Controls how "bouncy" the spring is
            duration: 1, // Total duration
          }}
          style={getDottedStyle(color.secondary, 4, 10)}
          className="w-80 h-80 relative z-20 rounded-full border-t-4 overflow-hidden border-about-lining"
        >
          {/* keep this as it is for the fill varient */}
          <Image
            src={"/cropped-me.png"}
            alt="the real photo of the maker"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
            className="object-contain relative"
            priority
          />
        </motion.div>

        <div className="text-lg leading-relaxed flex flex-col gap-8 p-6">
          <Text txt="The valleys of rural Wales aren't **quite Silicon Valley**, but growing up out here gives you a lot of space to think. When I wasn't out **exploring** the mountains, I was teaching myself to code. A lot has **changed over the years**, but I’ve been building for the web since table layouts and under-construction gifs were the Hot New Thing™." />
          <Text txt="The valleys of rural Wales aren't **quite Silicon Valley**, but growing up out here gives you a lot of space to think. When I wasn't out **exploring** the mountains, I was teaching myself to code. A lot has **changed over the years**, but I’ve been building for the web since table layouts and under-construction gifs were the Hot New Thing™." />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative z-0 mt-28 gap-12">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1, // Final scale
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4, // Trigger the animation when 40% of the element is in view
          }}
          transition={{
            type: "spring", // Use spring transition
            stiffness: 200, // Adjust stiffness for stronger spring effect
            damping: 10, // Controls how "bouncy" the spring is
            duration: 1, // Total duration
          }}
          className="w-96 h-96 relative z-20"
        >
          <Img src="/thoughts.png" alt="thoughts" />
        </motion.div>

        <div className="text-lg leading-relaxed flex flex-col gap-8 p-6">
          <H2 text={"Versatality"} />
          <Text txt="The valleys of rural Wales aren't **quite Silicon Valley**, but growing up out here gives you a lot of space to think. When I wasn't out **exploring** the mountains, I was teaching myself to code. A lot has **changed over the years**, but I’ve been building for the web since table layouts and under-construction gifs were the Hot New Thing™." />
        </div>
      </div>
      <div>
        <div className="text-lg leading-relaxed flex flex-col gap-8 p-6">
          <H2 text={"Hobbies"} />
          <Text txt="Outside of my work I like to **spend** as much time as I can away from my **laptop**, travelling and **getting** out and about with my camera. I shoot on a Fujifilm X-E4 with either a 23mm or 35mm lens, or sometimes just my phone." />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 p-6">
        {database.map((item, index) => (
          <Banner key={index} img={item.img} alt={item.alt} />
        ))}
      </div>
    </>
  );
}
