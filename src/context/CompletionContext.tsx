import { createContext, useContext, useState, ReactNode } from "react";

interface CompletionContextProps {
  completion: boolean;
  setCompletion: (value: boolean) => void;
}

const CompletionContext = createContext<CompletionContextProps | undefined>(
  undefined
);

export const CompletionProvider = ({ children }: { children: ReactNode }) => {
  const [completion, setCompletion] = useState(false);
  return (
    <CompletionContext.Provider value={{ completion, setCompletion }}>
      {children}
    </CompletionContext.Provider>
  );
};

export const useCompletion = () => {
  const context = useContext(CompletionContext);
  if (!context) {
    throw new Error("useCompletion must be used within a CompletionProvider");
  }
  return context;
};
