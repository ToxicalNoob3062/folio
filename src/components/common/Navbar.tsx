import SocialBar from "./SocialBar";
import NavLink from "./Navlink";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.9, // Delay before starting to animate children
      staggerChildren: 0.25, // Stagger the appearance of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar({ route }: { route: string }) {
  const text_colour = `text-${route}-primary`;
  return (
    <motion.div
      className="w-full flex flex-col h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SocialBar color={route} />
      <div className="flex flex-col p-8 flex-grow gap-20">
        {
          // Navigation links
          ["home", "work", "about", "writing"].map((route) => (
            <motion.div key={route} variants={itemVariants}>
              <NavLink path={route} color={text_colour} />
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  );
}
