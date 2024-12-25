import { createContext, useContext, useState, ReactNode } from "react";

interface SwapPageContextProps {
  swapPage: boolean;
  setSwapPage: (value: boolean) => void;
}

const SwapPageContext = createContext<SwapPageContextProps | undefined>(
  undefined
);

export const SwapPageProvider = ({ children }: { children: ReactNode }) => {
  const [swapPage, setSwapPage] = useState(false);

  return (
    <SwapPageContext.Provider value={{ swapPage, setSwapPage }}>
      {children}
    </SwapPageContext.Provider>
  );
};

export const useSwapPage = () => {
  const context = useContext(SwapPageContext);
  if (!context) {
    throw new Error("useSwapPage must be used within a SwapPageProvider");
  }
  return context;
};
