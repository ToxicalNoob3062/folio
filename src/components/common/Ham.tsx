import Logo from "./Logo";

export default function HamBurger() {
  return (
    <div className="w-full p-4 font-sans font-medium flex justify-between items-center tracking-[0.35em]">
      <div className="flex w-[40vw] items-center">
        <Logo />
        <div className="h-10 border-r border-home-primary mx-4"></div>
        <h2>MENU</h2>
      </div>
      <h2>HIRE ME</h2>
    </div>
  );
}
