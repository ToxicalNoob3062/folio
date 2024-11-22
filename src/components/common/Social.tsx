import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Social({ category }: { category: string }) {
  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="relative w-8 h-8"
      >
        <Image
          src={`/${category}.png`}
          alt="Social"
          layout="fill"
          className="transition-opacity duration-200 hover:opacity-0 focus:opacity-0"
        />
        <Image
          src={`/${category}-w.png`}
          alt="Social Hover"
          layout="fill"
          className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 hover:opacity-100 focus:opacity-100"
        />
      </motion.div>
    </Link>
  );
}
