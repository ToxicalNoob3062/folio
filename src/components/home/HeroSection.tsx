import { useCompletion } from "@/context/CompletionContext";
import { useMediaQuery } from "react-responsive";
import Img from "../common/Img";
import { getStripingStyle } from "@/extras/styles";
import { extendedColors } from "../../../tailwind.config";
import { routeStatus } from "@/extras/routes";
import { Route } from "@/extras/types";
import ScrollIndicator from "../common/Scroll";
import Text from "@/components/common/Bold";
import { easeIn, motion } from "framer-motion";

export default function HeroSection() {
  const { completion } = useCompletion();
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const color = extendedColors[routeStatus.present as Route].secondary;
  return (
    <div className="min-h-screen h-screen w-full flex flex-col">
      <div className="h-full w-full flex flex-col justify-start items-start lg:flex-row-reverse">
        <div className="w-full h-1/2 lg:h-4/5 lg:w-1/2 relative z-0 ">
          {/* Image Animation */}
          {completion && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }} // Ensure the image starts invisible and small
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring", // Use spring transition
                stiffness: 100, // Adjust stiffness for stronger spring effect
                damping: 10, // Controls how "bouncy" the spring is
                duration: 0.8,
                delay: 0.5,
              }}
              className="w-full h-full relative z-20" // Ensure image is always above
            >
              <Img src="/home-me.png" alt="Rahat" />
            </motion.div>
          )}
          {/* Stripe Background Animation */}
          {completion && (
            <motion.div
              initial={{ x: "-100%", y: "-45%", opacity: 0 }} // Start off-screen and invisible
              animate={
                completion
                  ? {
                      x: isLargeScreen ? "30%" : "50%",
                      y: "-45%",
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 1,
                ease: "easeInOut", // Smooth slide-in
              }}
              className="w-3/4 h-1/3 lg:w-[120%] rounded-md absolute top-1/2 right-1/2 z-10" // Ensure stripe is below image
              style={getStripingStyle(color, 5, 10)}
            ></motion.div>
          )}
        </div>
        {/* Hero Text Animations */}
        <div className="p-6 mx-auto h-1/2 lg:p-14 flex flex-col lg:h-full  lg:w-1/2 z-20">
          {completion && (
            <div className="h-fit lg:h-2/5  flex flex-col justify-start lg:justify-end items-center lg:items-start mb-8">
              <motion.h1
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  easeIn,
                }}
                className="text-center text-4xl xs:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl  lg:text-start w-[95%] lg:w-fit "
              >
                Hello Dear, I am <span className="font-bold">Rahat</span>
              </motion.h1>
              <motion.div
                initial={{
                  y: 60,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  easeIn,
                }}
                className="hidden lg:block mt-8 text-xl 2xl:text-2xl font-medium "
              >
                <Text
                  className="leading-relaxed"
                  txt="Showing my expertise in field of **web**, **software engineering** and **cloud arhitecturing** since 2022."
                />
              </motion.div>
            </div>
          )}
          <ScrollIndicator delay={1} />
        </div>
      </div>
    </div>
  );
}
