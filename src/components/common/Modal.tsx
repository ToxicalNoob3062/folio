import SocialBar from "./SocialBar";
import NavLink from "./Navlink";
import { motion, useAnimate, usePresence } from "framer-motion";
import { Route } from "@/extras/types";
import { Dispatch, SetStateAction, useEffect } from "react";
import { routeStatus } from "@/extras/routes";
import { extendedColors } from "../../../tailwind.config";
import { useCompletion } from "@/context/CompletionContext";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.3,
    },
  },
};

export default function Modal({
  changeRoute,
  setReloaded,
}: {
  changeRoute: (newRoute: Route) => void;
  setReloaded: Dispatch<SetStateAction<boolean>>;
}) {
  const [isPresent, safeToRemove] = usePresence();
  const { setCompletion } = useCompletion();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isPresent) {
      if (routeStatus.past !== routeStatus.present) {
        const exitAnimation = async () => {
          // inavildate the nav bar
          if (scope.current)
            await animate(scope.current, { zIndex: 40 }, { duration: 0.1 });

          // unstag all the child elements od scope
          let children = Array.from(scope.current.children); //length:2
          await new Promise((resolve) => setTimeout(resolve, 50));
          if (scope.current)
            await animate(children[0], { opacity: 0 }, { duration: 0.1 });

          //now remove the opacity of children[1] childrens one by one
          children = Array.from((children[1] as HTMLDivElement).children);
          for (let i = 0; i < children.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, 50));
            if (scope.current)
              await animate(children[i], { opacity: 0 }, { duration: 0.1 });
          }

          //change background color
          if (scope.current)
            await animate(
              scope.current,
              {
                backgroundColor:
                  extendedColors[routeStatus.present as Route].secondary,
              },
              { duration: 0.4 }
            );
          setReloaded(true);
          safeToRemove();
        };
        exitAnimation();
        setCompletion(false); //page transition has started set the complete to false
      } else {
        safeToRemove();
      }
    }
  }, [isPresent, scope, animate, safeToRemove, setCompletion, setReloaded]);
  return (
    <motion.div
      className={`bg-${routeStatus.present}-secondary w-full h-full px-6 tab:px-10 pt-20 tab:pt-28 flex flex-col gap-8 absolute top-0 left-0 z-20`}
      initial={{ top: "-100%" }}
      animate={{ top: "0%" }}
      ref={scope}
      transition={{ duration: 0.5 }}
    >
      {/* form the socials bar */}
      <SocialBar route={routeStatus.present} />

      {/* form the nav links */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-h-[460px] weird:max-h-[300px] flex-grow flex flex-col justify-between items-start"
      >
        {[
          { route: "home", id: 1 },
          { route: "work", id: 2 },
          { route: "about", id: 3 },
          { route: "writing", id: 4 },
        ].map((item) => (
          <NavLink
            key={item.id}
            path={item.route as Route}
            changeRoute={changeRoute}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
