import { createContext, useContext, useState, ReactNode } from "react";

interface PageLoadingContextProps {
  isPageLoading: boolean;
  setPageLoading: (value: boolean) => void;
}

const PageLoadingContext = createContext<PageLoadingContextProps | undefined>(
  undefined
);

export const PageLoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isPageLoading, setPageLoading] = useState<boolean>(true);

  return (
    <PageLoadingContext.Provider value={{ isPageLoading, setPageLoading }}>
      {children}
    </PageLoadingContext.Provider>
  );
};

export const usePageLoading = () => {
  const context = useContext(PageLoadingContext);
  if (!context) {
    throw new Error("usePageLoading must be used within a PageLoadingProvider");
  }
  return context;
};
