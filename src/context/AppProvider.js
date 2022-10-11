import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, SetUser] = useState("Hello! i am Context");

  return (
    <AppContext.Provider value={{ user, SetUser }}>
      {children}
    </AppContext.Provider>
  );
};

//This is custom hook. this hook allways must be use small letter.
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
