import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Social({ category }: { category: string }) {
  const width = 25;
  const height = 25;

  return (
    <Link href="/">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <Image
          src={`/${category}.png`}
          alt="Social"
          width={width}
          height={height}
          className="transition-opacity duration-200 hover:opacity-0 focus:opacity-0"
        />
        <Image
          src={`/${category}-w.png`}
          alt="Social Hover"
          width={width}
          height={height}
          className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 hover:opacity-100 focus:opacity-100"
        />
      </motion.div>
    </Link>
  );
}
