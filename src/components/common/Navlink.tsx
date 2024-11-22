import Link from "next/link";

export default function NavLink({
  path,
  color,
}: {
  path: string;
  color: string;
}) {
  const route = path === "home" ? "/" : `/${path}`;
  return (
    <h1 className={`font-bold text-5xl ${color}`}>
      <Link href={route}>{path[0].toUpperCase() + path.slice(1)}</Link>
    </h1>
  );
}
