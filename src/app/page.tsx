"use client";
import { Route, routeStatus, transitTo } from "@/data/routes";
import { motion } from "framer-motion";
import Image from "next/image";
import { extendedColors } from "../../tailwind.config";
import { useSwapPage } from "@/context/TransitContext";

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
  const color = extendedColors[routeStatus.present as Route].secondary;
  return (
    <>
      {/* hero section */}
      <div className="h-full flex flex-col items-center justify-center">
        <motion.div className="w-96 h-96 relative">
          <Image
            src={"/home-me.png"}
            alt="cartoon img"
            fill
            className="object-contain relative z-20"
          />
          <div
            className="w-80 h-52 rounded-md absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/3 z-10"
            style={getStripingStyle(color, 10, 10)}
          ></div>
        </motion.div>
        <h1 className="text-center p-6 text-5xl">
          Hello Dear, I am <br /> <span className="font-bold">Rahat</span>
          <br />
          <span className="font-semibold text-gray-400 text-base tracking-[0.3em]">
            SCROLL
          </span>
        </h1>
        <div className="border border-r border-home-primary flex-grow"></div>
      </div>
      {/* Call to action section */}
      <div className="flex-shrink-0 mt-28 p-6">
        <h1 className="text-5xl font-semibold w-64">
          {"Let's rock"} <br />
          together <span className="text-6xl text-home-secondary">.</span>
          <br />
          <div className="mt-3 border-b-4 border-home-secondary w-[30%]"></div>
        </h1>
        <p className="pt-6 text-xl w-96">
          Lorem <span className="text-lg font-semibold">ipsum</span> dolor sit
          amet consectetur adipisicing elit. Ipsam quidem necessitatibus odio
          veritatis dolores officiis{" "}
          <span className="text-lg font-semibold">ipsum</span> accusamus eveniet
          cum numquam veniam aperiam repellendus id{" "}
          <span className="text-lg font-semibold">ipsum</span> facere recusandae
          nihil a, rem possimus fugit.
        </p>
        <button
          onClick={() => transitTo("work", setSwapPage)}
          className="mt-8 py-3 px-6 border-2 border-home-lining text-home-lining rounded-lg text-xl font-bold"
          style={getStripingStyle(color, 4, 5)}
        >
          About my approach
        </button>
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
        <div className="w-full flex justify-center items-center">
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
        </div>
      </div>
    </>
  );
}
