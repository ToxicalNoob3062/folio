"use client";
import { routeStatus } from "@/extras/routes";
import { getDottedStyle } from "@/extras/styles";
import { Route } from "@/extras/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { extendedColors } from "../../../tailwind.config";

export default function Banner({ img, alt }: { img: string; alt: string }) {
  const color = extendedColors[routeStatus.present as Route];
  return (
    <div className="relative w-full overflow-hidden z-10 rounded-md">
      <motion.div
        initial={{
          top: "0%",
        }}
        whileInView={{
          top: ["0%", "-100%", "-200%"], // Moves up sequentially
        }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        className="absolute top-0 right-0 w-full h-[200%] z-20"
      >
        {/* Dotted Background */}
        <div
          style={getDottedStyle(color.secondary, 2, 10)}
          className="h-1/2 w-full bg-about-bg"
        ></div>
        {/* Solid Secondary Background */}
        <div className="h-1/2 w-full bg-about-secondary"></div>
      </motion.div>
      {/* Responsive Image */}
      <div className="relative w-full">
        <Image
          src={img}
          alt={alt}
          width={0} // Auto-determined based on parent
          height={0} // Auto-determined based on parent
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
          className="w-full h-auto object-contain" // Ensures the image adjusts height dynamically
          priority
        />
      </div>
    </div>
  );
}
