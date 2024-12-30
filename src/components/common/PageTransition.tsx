import { AnimatePresence } from "framer-motion";
import Transition from "./Transition";
import Greeter from "./Greeter";
import Modal from "./Modal";
import { Dispatch, SetStateAction } from "react";
import { Route } from "@/extras/types";

interface PageTransitionProps {
  isOpen: boolean;
  reloaded: boolean;
  route: Route;
  setReloaded: Dispatch<SetStateAction<boolean>>;
  changeRoute: (newRoute: Route) => void;
}

export default function PageTransition({
  isOpen,
  reloaded,
  route,
  setReloaded,
  changeRoute,
}: PageTransitionProps) {
  return (
    <AnimatePresence>
      <Transition key={"direct"} setReloaded={setReloaded} />
      {reloaded ? <Greeter setReloaded={setReloaded} route={route} /> : null}
      {isOpen ? (
        <Modal changeRoute={changeRoute} setReloaded={setReloaded} />
      ) : null}
    </AnimatePresence>
  );
}
