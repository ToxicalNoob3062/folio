"use client";
import { useCompletion } from "@/context/CompletionContext";
import Intro from "@/components/common/Intro";
import ScrollIndicator from "@/components/common/Scroll";
import Experience, { XP } from "@/components/work/Experience";
import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import Img from "@/components/common/Img";
import ProjectLinks, { Project } from "@/components/work/Project";
import SkillSet, { Skill } from "@/components/work/Skills";

const experiences: XP[] = [
  {
    id: 0,
    role: "Backend Engineer",
    company: "King Digital Recharge, Dhaka, Bangladesh",
    date: "Oct 2022 - Apr 2023",
    points: [
      "Tested backends by writing **unit tests** and **integration tests** in **Jest** for pre-existing **Node** backend projects which improved the software assurance and quality.",
      "Optimized back-end systems for mobile recharge transactions, resulting in a significant increase in server efficiency by **10,000 requests** and a remarkable **45% reduction** in costs.",
    ],
  },
  {
    id: 1,
    role: "Frontend Developer",
    company: "Creative Agency, Tokyo, Japan",
    date: "May 2021 - Sep 2022",
    points: [
      "Developed responsive websites with modern designs using **React** and **Tailwind CSS**.",
      "Collaborated with the design team to implement user-friendly interfaces, increasing user engagement by **25%**.",
    ],
  },
  // Add more experiences as needed
];

const projects: Project[] = [
  {
    id: 0,
    icon: "/project1.png",
    title: "Go Service Hub",
    description:
      "Developed a **Microservice Hub** in golang consisting of **five** services designed to process **API requests** in a fully distributed system connected via complex networking protocols such as **HTTP**, **RPC**, **gRPC**, **AMQP**, and **SMTP**",
    links: {
      live: "https://example.com",
      source: "",
      video: "",
    },
  },
  {
    id: 1,
    icon: "/project2.png",
    title: "Truth Engine",
    description:
      "Developed a client-side **JavaScript recursive engine** utilizing **recursion** and renowned **data structures** to generate **truth tables** from boolean expressions, applying combinatorics principles for accurate output",
    links: {
      live: "https://example.com",
      source: "https://github.com",
      video: "https://youtube.com",
    },
  },
];

const skillsData: Skill[] = [
  {
    id: 0,
    heading: "Databases",
    images: [
      "/mongodb.svg",
      "/postgresql.svg",
      "/redis.svg",
      "/dynamo.svg",
      "/cockroachdb.svg",
    ],
  },
  {
    id: 1,
    heading: "Languages",
    images: ["js.svg", "python.svg", "go.svg", "cpp.svg", "java.svg"],
  },
];

export default function Work() {
  const { completion } = useCompletion();
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8">
        {completion && (
          <Intro
            heading={"Work is life"}
            content="I work with forward-thinking people to design and build interactive, accessible websites and products. From working on projects for likes of **Aardman Animations**, **UNHCR**, RNLI, and **Honda**, to working at startups in **Tokyo**, I've devoted more than a decade to making the web a little bit brighter."
            direct
          />
        )}
        <ScrollIndicator delay={1} />
      </div>
      <div className="p-6 mt-28 min-h-[90vh]  ">
        <h2 className="text-4xl tracking-wide font-bold mb-8">
          Experience
          <motion.button
            initial={{
              opacity: 0,
              y: "-25%",
            }}
            whileInView={{
              opacity: 1,
              y: "25%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            onClick={() =>
              setCurrentExperienceIndex(
                (currentExperienceIndex + 1) % experiences.length
              )
            }
            className="w-8 ml-4 relative"
          >
            <Img src="/reload.png" alt="reload" />
          </motion.button>
          <br />
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
            className="w-[20%] inline-block border-b-4 border-work-highlight"
          ></motion.span>
        </h2>
        <Experience xp={experiences[currentExperienceIndex]} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold tracking-wide">
          Projects
          <motion.span
            initial={{
              opacity: 0,
              x: 30,
            }}
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
            className="inline-block text-5xl text-work-highlight"
          >
            .
          </motion.span>
          <br />
          <div className="flex justify-center">
            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: "100%",
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
              className="inline-block border-b-4 border-work-highlight"
            ></motion.span>
          </div>
        </h2>
        <div className="grid grid-cols-1 gap-16 mt-8 p-6">
          {projects.map((project) => (
            <ProjectLinks project={project} key={project.id} />
          ))}
        </div>
        <motion.a
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          viewport={{
            amount: "all",
          }}
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-center text-xl font-bold mt-4"
        >
          ____ more _____
        </motion.a>
      </div>
      {/* skills section */}
      <div className="mt-28 p-6">
        <h2 className="text-4xl tracking-wide font-bold mb-8">
          Skills
          <motion.button
            initial={{
              opacity: 0,
              y: "-25%",
            }}
            whileInView={{
              opacity: 1,
              y: "25%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeIn",
            }}
            onClick={() =>
              setCurrentSkillIndex((currentSkillIndex + 1) % skillsData.length)
            }
            className="w-8 ml-4 relative"
          >
            <Img src="/reload.png" alt="reload" />
          </motion.button>
          <br />
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
            className="w-[20%] inline-block border-b-4 border-work-highlight"
          ></motion.span>
        </h2>
        <SkillSet skill={skillsData[currentSkillIndex]} />
      </div>
    </>
  );
}
