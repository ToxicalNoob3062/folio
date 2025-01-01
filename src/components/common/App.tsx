import { ReactNode, useEffect } from "react";
import Footer from "./Footer";
import { usePageLoading } from "@/context/PageloadContext";
import { useIsFetching } from "@tanstack/react-query";
import { Route } from "@/extras/types";

export default function App({
  children,
  route,
}: {
  children: ReactNode;
  route: Route;
}) {
  const { setPageLoading } = usePageLoading();
  const isFetching = useIsFetching();
  useEffect(() => {
    setPageLoading(isFetching > 0);
    return () => {
      setPageLoading(true);
    };
  }, [isFetching, setPageLoading, route]);
  return (
    <div className="h-screen hide-bars max-w-[2000px] w-full mx-auto ">
      {children}
      <Footer />
    </div>
  );
}
