import { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export function GeneralContextWrapper({ children }) {

  const [title, setTitle] = useState("Context Default Title");
  const updateTitle = (string) => setTitle(string);

  return (
    <AppContext.Provider value={{ title, setTitle }}>
      {children}
    </AppContext.Provider>
  );
}

export function GeneralContext() {

  return useContext(AppContext);

}






