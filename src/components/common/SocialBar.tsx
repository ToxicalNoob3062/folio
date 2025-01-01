import React, { useState } from "react";
import { motion } from "framer-motion";
import { Contact } from "@/extras/types";
import Social from "./Social";

export default function SocialBar({ route }: { route: string }) {
  const socials: Contact[] = [
    {
      platform: "github",
      link: "https://github.com/ToxicalNoob3062",
    },
    {
      platform: "linkedin",
      link: "https://www.linkedin.com/in/rahat-bin-taleb-a2110b241",
    },
    {
      platform: "youtube",
      link: "https://www.youtube.com/@rahatsshowcase8614/featured",
    },
    {
      platform: "email",
      link: "mailto:rahat3062@gmail.com",
    },
    {
      platform: "facebook",
      link: "https://www.facebook.com/ToxicalNoob",
    },
  ];
  const [showSocials, setShowSocials] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "80%",
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
      onAnimationComplete={() => setShowSocials(true)}
      className="flex w-full p-6 mt-8 sm:p-10 wide_short:p-4 sm:mt-16 wide_short:mt-0 items-center gap-4 sm:gap-8"
    >
      <div className={`border-t-4 border-${route}-lining w-20`}></div>
      <div className="flex items-center gap-4 sm:gap-8">
        {socials.map((social, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={showSocials ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.1, delay: showSocials ? i * 0.1 : 0 }}
            className="w-8 h-8"
          >
            <Social contact={social} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
