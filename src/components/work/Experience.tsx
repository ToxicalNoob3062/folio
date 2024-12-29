import { AnimatePresence, motion } from "framer-motion";
import Text from "../common/Bold";

export type XP = {
  id: number;
  role: string;
  company: string;
  date: string;
  points: string[];
};

const containerVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeIn" } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: "easeOut" } },
};

const listVariants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeIn", staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeIn" } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience({ xp }: { xp: XP }) {
  const { id, role, company, date, points } = xp;

  return (
    <div className="p-4">
      {/* Header Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`header-${id}`}
          className="mb-4 flex flex-col gap-2"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div>
            <h2 className="text-2xl text-work-lining font-bold">
              <span className="text-lg mr-2">{id + 1}.</span>
              {role}
            </h2>
            <h4 className="text-xl text-gray-600 font-medium">{company}</h4>
          </div>
          <h6 className="text-lg text-work-highlight font-medium">{date}</h6>
        </motion.div>
      </AnimatePresence>

      {/* List Section */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={`list-${id}`}
          className="list-disc pl-6 text-lg flex flex-col gap-4"
          variants={listVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {points.map((point, i) => (
            <motion.li
              key={i}
              variants={listItemVariants}
              className="text-work-primary"
            >
              <Text txt={point} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
