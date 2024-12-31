import Link from "next/link";
import { motion } from "framer-motion";
import { Contact } from "@/extras/types";
import Img from "./Img";

export default function Social({ contact }: { contact: Contact }) {
  return (
    <Link href={contact.link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="relative w-8 h-8"
      >
        <Img
          src={`/${contact.platform}.png`}
          alt="Social"
          className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 hover:opacity-0"
        />
        <Img
          src={`/${contact.platform}-w.png`}
          alt="Social"
          className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 hover:opacity-100"
        />
      </motion.div>
    </Link>
  );
}
