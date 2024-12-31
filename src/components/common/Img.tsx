import Image from "next/image";

//  must be wrapped by an element which has its own width and relatively positioned
export default function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      alt={alt}
      className="w-full h-auto object-contain"
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
    />
  );
}
