import { Route } from "@/extras/routes";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function NavLink({
  path,
  changeRoute,
}: {
  path: string;
  changeRoute: (newRoute: Route) => void;
}) {
  return (
    <motion.button
      variants={itemVariants}
      className="font-bold text-5xl hover:text-white"
      onClick={() => {
        changeRoute(path as Route);
      }}
    >
      {path[0].toUpperCase() + path.slice(1)}
    </motion.button>
  );
}
