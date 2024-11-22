import Social from "./Social";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before starting to animate children
      staggerChildren: 0.1, // Stagger the appearance of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export default function SocialBar({ route }: { route: string }) {
  const socials = ["github", "linkedin", "facebook", "email"];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex w-full p-6 items-center gap-4"
    >
      <motion.div
        initial={{ x: "50vw" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.25 }}
        className={`border-t-4 border-${route}-lining w-20`}
      ></motion.div>
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <motion.div key={social} variants={itemVariants}>
            <Social category={social} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}