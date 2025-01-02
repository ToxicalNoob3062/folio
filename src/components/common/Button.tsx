import { routeStatus } from "@/extras/routes";
import { getStripingStyle } from "@/extras/styles";
import { extendedColors } from "../../../tailwind.config";
import { Route } from "@/extras/types";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  txt: string;
}

export default function Button({
  txt,
  className: classy,
  ...props
}: ButtonProps) {
  const color = extendedColors[routeStatus.present as Route].secondary;
  return (
    <button
      className={`mt-8 py-4 px-4 xs:px-6 xl:px-8 2xl:px-10 2xl:py-6 border-2 border-home-lining text-home-lining rounded-lg text-md xs:text-xl font-bold ${classy}`}
      style={getStripingStyle(color, 4, 5)}
      {...props}
    >
      {txt}
    </button>
  );
}
