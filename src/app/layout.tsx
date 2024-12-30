"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { updateRouteStatus } from "@/extras/routes";
import { Route } from "@/extras/types";
import Header from "@/components/common/Header";
import { useState } from "react";
import { SwapPageProvider } from "@/context/TransitContext";
import { CompletionProvider } from "@/context/CompletionContext";
import { PageLoadingProvider } from "@/context/PageloadContext";
import PageTransition from "@/components/common/PageTransition";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "@/components/common/App";

// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

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
  // Check if navigation is open
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
        className={`${bitter.variable} antialiased font-bitter w-screen h-screen p-3 flex text-${route}-primary`}
      >
        <div
          className={`bg-${route}-bg relative z-10 flex-grow flex flex-col overflow-hidden`}
        >
          <Header route={route} control={[isOpen, changeRoute]} />
          <QueryClientProvider client={queryClient}>
            <PageLoadingProvider>
              <SwapPageProvider>
                <CompletionProvider>
                  <App key={route} route={route}>
                    {children}
                  </App>
                  <PageTransition
                    isOpen={isOpen}
                    reloaded={reloaded}
                    route={route}
                    changeRoute={changeRoute}
                    setReloaded={setReloaded}
                  />
                </CompletionProvider>
              </SwapPageProvider>
            </PageLoadingProvider>
          </QueryClientProvider>
        </div>
      </body>
    </html>
  );
}
