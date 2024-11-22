import SocialBar from "./SocialBar";

export default function Navbar({ color }: { color: string }) {
  return (
    <div className="w-full">
      <SocialBar color={color} />
    </div>
  );
}
