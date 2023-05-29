import React, { createContext, useState } from "react";

interface AppSelectContext {
selectEl: boolean;
open: () => void;
close: () => void;
}

export const selectAppContext = createContext<AppSelectContext>({
  selectEl: false,
  open: () => {},
  close: ()=> {},
});

export const AppSelectProvider = ({ children }: { children: React.ReactNode}) => {
  const [selectEl, setSelectEl] = useState(false);

  const open = () => {
    setSelectEl(true);
  };

  const close = () => {
    setSelectEl(false);
  }
  return (
    <selectAppContext.Provider value={{ selectEl, open, close }}>
      {children}
    </selectAppContext.Provider>
  );
};