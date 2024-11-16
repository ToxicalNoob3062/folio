import Link from "next/link";

export default function NavLink({
  path,
}: {
  path: "home" | "work" | "about" | "writing";
}) {
  const route = path === "home" ? "/" : `/${path}`;
  return (
    <nav>
      <Link href={route}>{path[0].toUpperCase() + path.slice(1)}</Link>;
    </nav>
  );
}
