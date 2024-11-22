import Link from "next/link";

export default function NavLink({ path }: { path: string }) {
  const route = path === "home" ? "/" : `/${path}`;
  return (
    <h1 className={`font-bold text-5xl hover:text-white`}>
      <Link href={route}>{path[0].toUpperCase() + path.slice(1)}</Link>
    </h1>
  );
}
