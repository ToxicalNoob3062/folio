import { Route } from "@/extras/types";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const routeDescription = {
  home: "Back to the home page.",
  work: "A glimplse into my professional life.",
  about: "A little about me and my background.",
  writing: "My latest writings and articles on tech.",
};

export default function NavLink({
  path,
  changeRoute,
}: {
  path: string;
  changeRoute: (newRoute: Route) => void;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="w-full flex items-baseline md:gap-24"
    >
      <button
        className="w-52 tab:w-80 font-bold text-start text-4xl tab:text-5xl weird:text-4xl hover:text-white"
        onClick={() => {
          changeRoute(path as Route);
        }}
      >
        {path[0].toUpperCase() + path.slice(1)}
      </button>
      <h4 className="hidden laptop:block text-sm">
        {routeDescription[path as Route]}
      </h4>
    </motion.div>
  );
}
