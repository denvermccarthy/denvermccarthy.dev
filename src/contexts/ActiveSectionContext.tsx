import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: (name: string) => void;
}

const ActiveSectionContext = createContext<
  ActiveSectionContextProps | undefined
>(undefined);

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};

export const ActiveSectionProvider = ({ children }: PropsWithChildren) => {
  const [activeSection, setActiveSection] = useState("bio");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
