import Image from "next/image";

export default function Logo({ route }: { route: string }) {
  return (
    <a className="w-10 h-10 inline-block">
      <Image src={`/icon-${route}.png`} alt="logo" width={100} height={100} />
    </a>
  );
}
