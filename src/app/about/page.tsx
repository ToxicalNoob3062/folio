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
import { Gallery, Route } from "@/extras/types";
import Img from "@/components/common/Img";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/extras/queries";

export default function About() {
  const { completion } = useCompletion();
  const color = extendedColors[routeStatus.present as Route];
  const { data: gallerySet } = useQuery<Gallery[]>({
    queryKey: ["gallery"],
    queryFn: fetchAll("gallery"),
  });
  const gallery = gallerySet ? gallerySet[0] : { images: [] };
  const prefix = process.env.NEXT_PUBLIC_S3_URL + "/gallery/";
  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8">
        {completion && (
          <Intro
            heading={"About me"}
            content="I am a **Software Engineer** based in **Orleans, Canada.** My guiding principle is simple: **always learn and adapt** to meet project demands, ensuring the best outcomes rather than limiting myself to a predefined skillset. While this approach might require extra effort, it yields long-term benefits for both myself and my clients in terms of **monetary value** and **satisfaction**."
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
          <Text txt="I was born in **Dhaka, Bangladesh**, and as a part of **Gen Z**, I witnessed the **tech boom** from an early age. Fascinated by technology, I transitioned from being a user to becoming a builder during my **high school years.**" />
          <Text txt="Driven by my love for **data and its monetary potential**, I pursued a **Bachelor’s in Computer Science at Carleton University, Canada,** seeking better opportunities and growth." />
          <Text txt="Currently, I’m in an exciting phase of life, actively seeking **co-op career opportunities** to transition from solo development to collaborating with teams and building a strong **industry presence** through **high-quality work**." />
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
          <Text txt="My biggest strength has always been my **versatility** —exploring various branches of **computer science.** From **data representation** to **data safety**, I’ve tackled diverse challenges:" />
          <ul className="list-disc list-outside pl-8 flex flex-col gap-4">
            <li>
              <Text txt="Created **aesthetic user interfaces** for representing data." />
            </li>
            <li>
              <Text txt="Developed **complex algorithms** to solve heavy computational problems." />
            </li>
            <li>
              <Text txt="Engaged in **competitive programming** on platforms like **LeetCode** and **CodeForces**." />
            </li>
            <li>
              <Text txt="Worked on **data analysis**, **web scraping**, **computer graphics**, **microservices**, and **API building.**" />
            </li>
            <li>
              <Text txt="Built **scalable architectures** on **AWS** and contributed to **open-source** through small libraries." />
            </li>
          </ul>
          <Text txt="Recently, I’ve delved into **AI**, learning to train and create models using **TensorFlow**, and I’m eager to deepen my expertise in this field." />
        </div>
      </div>
      <div>
        <div className="text-lg leading-relaxed flex flex-col gap-8 p-6">
          <H2 text={"Hobbies"} />
          <Text txt="Outside of coding, I love teaching and sharing knowledge through **educational content**, **poetry**, and **blog posts** to contribute to the community. I also enjoy **mobile photography**, **watching movies**, and **cooking occasionally**, as well as participating in **volunteer activities** to support organizations in achieving their **social goals.**" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 p-6">
        {gallery?.images.map((item, index) => (
          <Banner key={index} img={prefix + item} alt={item} />
        ))}
      </div>
    </>
  );
}
