"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Route, routeStatus } from "@/data/routes";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/common/Modal";

const bitter = localFont({
  src: "./fonts/Bitter.ttf",
  variable: "--font-bitter",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //check if navigation is open
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const route = (usePathname().split("/")[1] || "home") as Route;
  const changeRoute = (newRoute: Route) => {
    routeStatus.past = route;
    routeStatus.present = newRoute;
    router.push(newRoute !== "home" ? `/${newRoute}` : `/`);
    setIsOpen((prev) => !prev);
  };

  return (
    <html lang="en">
      <body
        className={`${bitter.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3 flex text-${route}-primary`}
      >
        <div
          className={`bg-${route}-bg relative z-10 flex-grow flex flex-col overflow-hidden`}
        >
          <Header route={route} control={[isOpen, changeRoute]} />
          <div className="h-[100vh] hide-bars">
            {children}
            <Footer />
          </div>
          <AnimatePresence>
            {isOpen ? <Modal changeRoute={changeRoute} /> : null}
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
