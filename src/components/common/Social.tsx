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
          fill
          sizes="(max-width: 640px) 14px, (max-width: 768px) 15px, (max-width: 1024px) 16px, (max-width: 1280px) 17px, (max-width: 1536px) 18px, 20px"
          className="transition-opacity duration-200 hover:opacity-0 focus:opacity-0 object-contain"
        />
        <Image
          src={`/${category}-w.png`}
          alt="Social Hover"
          fill
          sizes="(max-width: 640px) 14px, (max-width: 768px) 15px, (max-width: 1024px) 16px, (max-width: 1280px) 17px, (max-width: 1536px) 18px, 20px"
          className="absolute top-0 left-0 transition-opacity duration-200 opacity-0 hover:opacity-100 focus:opacity-100 object-contain"
        />
      </motion.div>
    </Link>
  );
}
