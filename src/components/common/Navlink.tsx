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
      className=" w-full flex items-baseline md:gap-24"
    >
      <button
        className="w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 font-bold text-start text-5xl sm:text-6xl 2xl:text-7xl wide_short:text-5xl  hover:text-white"
        onClick={() => {
          changeRoute(path as Route);
        }}
      >
        {path[0].toUpperCase() + path.slice(1)}
      </button>
      <h4 className="hidden lg:block text-lg xl:text-xl 2xl:text-2xl font-wider">
        {routeDescription[path as Route]}
      </h4>
    </motion.div>
  );
}
