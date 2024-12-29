"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { updateRouteStatus } from "@/extras/routes";
import { Route } from "@/extras/types";
import Header from "@/components/common/Header";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@/components/common/Modal";
import Greeter from "@/components/common/Greeter";
import Transition from "@/components/common/Transition";
import { SwapPageProvider } from "@/context/TransitContext";
import { CompletionProvider } from "@/context/CompletionContext";
import Footer from "@/components/common/Footer";

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
  const [reloaded, setReloaded] = useState(true);
  const router = useRouter();
  const route = (usePathname().split("/")[1] || "home") as Route;

  const changeRoute = (newRoute: Route) => {
    updateRouteStatus(newRoute);
    router.push(newRoute !== "home" ? `/${newRoute}` : `/`);
    setIsOpen((prev) => !prev);
  };

  if (reloaded) updateRouteStatus(route);

  return (
    <html lang="en">
      <body
        className={`${bitter.variable} antialiased font-bitter w-[100vw] h-[100vh] p-3 flex text-${route}-primary`}
      >
        <div
          className={`bg-${route}-bg relative z-10 flex-grow flex flex-col overflow-hidden`}
        >
          <Header route={route} control={[isOpen, changeRoute]} />
          <SwapPageProvider>
            <CompletionProvider>
              <div className="h-[100vh] hide-bars" id="display">
                {children}
                <Footer />
              </div>
              {/* Page Route Transitioning Setup */}
              <AnimatePresence>
                <Transition key={"direct"} />
                {reloaded ? (
                  <Greeter setReloaded={setReloaded} route={route} />
                ) : null}
                {isOpen ? <Modal changeRoute={changeRoute} /> : null}
              </AnimatePresence>
            </CompletionProvider>
          </SwapPageProvider>
        </div>
      </body>
    </html>
  );
}
