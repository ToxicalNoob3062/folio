"use client";
import { useCompletion } from "@/context/CompletionContext";
import Intro from "@/components/common/Intro";
import ScrollIndicator from "@/components/common/Scroll";
import Experience from "@/components/work/Experience";
import { easeIn, motion } from "framer-motion";
import { useState } from "react";
import Img from "@/components/common/Img";
import ProjectLinks from "@/components/work/Project";
import SkillSet from "@/components/work/Skills";
import { Project, Skill, XP } from "@/extras/types";
import { fetchAll } from "@/extras/queries";
import { useQuery } from "@tanstack/react-query";

export default function Work() {
  const { completion } = useCompletion();
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const { data: skills } = useQuery<Skill[]>({
    queryKey: ["skills"],
    queryFn: fetchAll("skills"),
  });

  const { data: projects } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchAll("projects"),
  });

  const { data: experiences } = useQuery<XP[]>({
    queryKey: ["experiences"],
    queryFn: fetchAll("experiences"),
  });

  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8">
        {completion && (
          <Intro
            heading={"Work is life"}
            content="I dedicate **half of my day** to delivering the best work I can and finding **inner peace** by seeing the impact of my efforts. I thrive in **collaborative environments** where I can work with passionate individuals, as it allows me to **learn from the best** and help guide others to ensure the team's success. When working with clients, I seek out **forward-thinking** people who are committed to **making meaningful changes** to make a **better world.**"
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
                (currentExperienceIndex + 1) % (experiences?.length || 1)
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
        {experiences && <Experience xp={experiences[currentExperienceIndex]} />}
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
          {projects?.map((project) => (
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
              setCurrentSkillIndex(
                (currentSkillIndex + 1) % (skills?.length || 1)
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
        {skills && <SkillSet skill={skills[currentSkillIndex]} />}
      </div>
    </>
  );
}
