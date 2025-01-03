import { AnimatePresence, motion } from "framer-motion";
import Img from "@/components/common/Img"; // Assuming you have an Img component for image handling
import { Skill } from "@/extras/types";

const containerVariants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Skills Component
export default function SkillSet({ skill }: { skill: Skill }) {
  const prefix = `${
    process.env.NEXT_PUBLIC_S3_URL
  }/skills/${skill.heading.toLowerCase()}/`;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      className="p-6"
    >
      {/* Header with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`heading-${skill.id}`}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-2xl font-bold mx-auto text-work-lining">
            {skill.heading}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Images Grid with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`images-${skill.id}`}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-wrap justify-around gap-8 space-y-4"
        >
          {skill.images.map((src, index) => (
            <motion.div
              key={index}
              className="w-14 h-14 mx-auto"
              whileHover={{ scale: 1.1 }}
            >
              <Img src={prefix + src} alt={`${skill.heading} Skill ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
