"use client";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function HamBurger({
  isOpen,
  setIsOpen,
  bgColour,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bgColour: string;
}) {
  // Toggle menu open/close
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-full p-6 font-sans font-medium flex justify-between items-center tracking-[0.35em] ${bgColour}`}
    >
      <div className="flex w-[40vw] items-center">
        <Logo />
        <div className="h-10 border-r border-home-primary mx-4"></div>

        {/* Smaller container */}
        <div className="h-8 w-20 overflow-hidden relative cursor-pointer">
          {/* Sliding element */}
          <motion.div
            className="absolute top-0 left-0 w-full"
            initial={{ y: "-2rem" }} // Start position
            animate={{ y: isOpen ? "0rem" : "-2rem" }} // Slide up or down
            transition={{
              duration: 0.2, // Animation duration
              ease: [0.175, 0.885, 0.32, 1.3], // Cubic-bezier easing
            }}
          >
            <h2
              onClick={handleMenuClick}
              className="h-8 w-auto flex items-center justify-center"
            >
              CLOSE
            </h2>
            <h2
              onClick={handleMenuClick}
              className="h-8 w-auto  flex items-center justify-center"
            >
              MENU
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Hire Me Text */}
      <h2 className="cursor-pointer">HIRE ME</h2>
    </div>
  );
}
