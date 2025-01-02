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
import { useQuery } from "@tanstack/react-query";
import { fetchAll } from "@/extras/queries";
import Button from "@/components/common/Button";

export default function About() {
  const { completion } = useCompletion();
  const color = extendedColors[routeStatus.present as Route].secondary;
  const { data: gallerySet } = useQuery<Gallery[]>({
    queryKey: ["gallery"],
    queryFn: fetchAll("gallery"),
    staleTime: Infinity,
  });
  const gallery = gallerySet ? gallerySet[0] : { images: [] };
  const prefix = process.env.NEXT_PUBLIC_S3_URL + "/gallery/";
  return (
    <div className="p-4 xs:p-6 sm:p-8 lg:p-10 2xl:p-12 flex flex-col items-center">
      <div className="flex-grow w-full">
        <div className="min-h-screen flex flex-col gap-16 md:gap-20">
          {completion && (
            <Intro
              heading={"About me"}
              content="I am a **Software Engineer** based in **Orleans, Canada.** My guiding principle is simple: **always learn and adapt** to meet project demands, ensuring the best outcomes rather than limiting myself to a predefined skillset. While this approach might require extra effort, it yields long-term benefits for both myself and my clients in terms of **monetary value** and **satisfaction**."
              direct
            />
          )}
          <ScrollIndicator delay={1} />
        </div>
        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between relative z-0 mt-28 gap-12 lg:gap-0">
          <div className="lg:w-1/2 lg:flex justify-center items-center ">
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
              style={getDottedStyle(color, 4, 10)}
              className="w-80 h-80 lg:w-96 lg:h-96  relative z-20 rounded-full border-t-4 overflow-hidden border-about-lining flex items-end"
            >
              {/* keep this as it is for the fill varient */}
              <Img
                src={"/cropped-me.png"}
                className="w-4/5 mx-auto"
                alt="the real photo of the maker"
              />
            </motion.div>
          </div>

          <div className="text-lg lg:text-xl leading-relaxed  flex flex-col gap-8 p-6 lg:w-1/2">
            <Text txt="I was born in **Dhaka, Bangladesh**, and as a part of **Gen Z**, I witnessed the **tech boom** from an early age. Fascinated by technology, I transitioned from being a user to becoming a builder during my **high school years.**" />
            <Text txt="Driven by my love for **data and its monetary potential**, I pursued a **Bachelor’s in Computer Science at Carleton University, Canada,** seeking better opportunities and growth." />
            <Text txt="Currently, I’m in an exciting phase of life, actively seeking **co-op career opportunities** to transition from solo development to collaborating with teams and building a strong **industry presence** through **high-quality work**." />
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between relative z-0 mt-28 gap-12 lg:gap-0">
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
            className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 2xl:w-2/5 lg:flex justify-center items-center"
          >
            <Img src="/thoughts.png" alt="thoughts" />
          </motion.div>
          <div className="text-lg leading-relaxed flex flex-col gap-8 p-6 lg:w-1/2">
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
        <div className="lg:flex mt-28">
          <div className="text-lg leading-relaxed flex flex-col gap-8 p-6 lg:w-1/2 ">
            <H2 text={"Hobbies"} />
            <Text txt="Outside of coding, I love teaching, playing with my pet **Meera** and sharing knowledge through **educational content**, **poetry**, and **blog posts** to contribute to the community. I also enjoy **mobile photography**, **watching movies**, and **cooking occasionally**, as well as participating in **volunteer activities** to support organizations in achieving their **social goals.**" />
          </div>
          <div className="hidden w-1/2 lg:flex justify-center items-center">
            <div
              style={getDottedStyle(color, 2, 10)}
              className="w-4/5 h-3/5"
            ></div>
          </div>
        </div>
        <div className="grid border-t-4 border-about-highlight grid-cols-1 gap-8 p-6 lg:grid-cols-2 lg:gap-12 mt-28 w-full md:max-w-screen-sm lg:max-w-screen-xl mx-auto">
          {gallery?.images.map((item, index) => (
            <Banner key={index} img={prefix + item} alt={item} />
          ))}
        </div>
        <Button className="block mx-auto" txt={"See more on Facebook"} />
      </div>
    </div>
  );
}
