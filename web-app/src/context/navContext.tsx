import React, { createContext, useState } from 'react';

interface AppSelectContext {
  navPanel: boolean;
  open: () => void;
  close: () => void;
}

export const navContext = createContext<AppSelectContext>({
  navPanel: false,
  open: () => {},
  close: () => {},
});

export const AppSelectProvider = ({ children }: { children: React.ReactNode }) => {
  const [navPanel, setNavPanel] = useState(false);

  const open = () => {
    setNavPanel(true);
  };

  const close = () => {
    setNavPanel(false);
  };
  return (
    <navContext.Provider value={{ navPanel, open, close }}>
      {children}
    </navContext.Provider>
  );
};
