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
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the disappearance of each child
      staggerDirection: -1, // Reverse the order of staggering
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Navbar({
  route,
  setIsOpen,
}: {
  route: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      className="w-full flex flex-col h-full"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <SocialBar route={route} />
      <div className="flex flex-col p-8 flex-grow gap-20">
        {
          // Navigation links
          ["home", "work", "about", "writing"].map((route) => (
            <motion.div key={route} variants={itemVariants}>
              <NavLink path={route} setIsOpen={setIsOpen} />
            </motion.div>
          ))
        }
      </div>
    </motion.div>
  );
}
