import { motion } from "framer-motion";
import Img from "../common/Img";
import Text from "../common/Bold";

export type Project = {
  id: number;
  icon: string;
  title: string;
  description: string;
  links: {
    live?: string;
    source?: string;
    video?: string;
  };
};

export default function ProjectLinks({ project }: { project: Project }) {
  const links = project.links;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, boxShadow: "none" }}
      whileInView={{
        opacity: 1,
        y: 0,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex-col flex gap-8 justify-center shadow-md shadow-work-secondary relative p-8 rounded-xl"
    >
      <div className="w-20 h-20 relative">
        <Img src={project.icon} alt={project.title} />
      </div>
      <div>
        <h4 className="text-2xl text-work-lining font-bold tracking-wide mb-4">
          {project.title}
        </h4>
        <div className="text-lg text-work-primary">
          <Text txt={project.description} />
        </div>
      </div>
      <ul className="flex gap-4 border-b-2 border-work-lining mr-4 absolute top-0 right-0 p-3">
        {links.live && (
          <li className="w-8 h-8">
            <a
              className="w-full h-full relative"
              href={links.live}
              target="_blank"
              rel="noreferrer"
            >
              <Img src="/explore.png" alt="explore" />
            </a>
          </li>
        )}
        {links.source && (
          <li className="w-8 h-8 relative">
            <a
              className="w-full h-full relative"
              href={links.source}
              target="_blank"
              rel="noreferrer"
            >
              <Img src="/github.png" alt="github" />
            </a>
          </li>
        )}
        {links.video && (
          <li className="w-8 h-8 relative">
            <a
              className="w-full h-full relative"
              href={links.video}
              target="_blank"
              rel="noreferrer"
            >
              <Img src="/youtube.png" alt="youtube" />
            </a>
          </li>
        )}
      </ul>
    </motion.div>
  );
}
