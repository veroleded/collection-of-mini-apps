import React, { createContext, useState } from 'react';

interface AppSelectContext {
  navPanel: boolean;
  open: () => void;
  close: () => void;
  app: string;
  setNewApp: (app: string) => void;
}

export const navContext = createContext<AppSelectContext>({
  navPanel: false,
  open: () => {},
  close: () => {},
  app: 'Main',
  setNewApp: (app) => {},
});

export const AppSelectProvider = ({ children }: { children: React.ReactNode }) => {
  const [navPanel, setNavPanel] = useState(false);
  const [app, setApp] = useState('Main');

  const setNewApp = (name: string) => {
    setApp(name);
  };

  const open = () => {
    setNavPanel(true);
  };

  const close = () => {
    setNavPanel(false);
  };
  return (
    <navContext.Provider value={{ navPanel, open, close, app, setNewApp }}>
      {children}
    </navContext.Provider>
  );
};
