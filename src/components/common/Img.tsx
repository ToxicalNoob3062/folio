import Image, { ImageProps } from "next/image";

interface ImgProps extends ImageProps {
  src: string;
  alt: string;
}

export default function Img({ src, alt, ...props }: ImgProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain"
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
      {...props}
    />
  );
}
