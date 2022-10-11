import { createContext, useState } from "react";

const UserContext = createContext();

function GlobalContext({ children }) {
  return <UserContext.Provider value="hello">{children}</UserContext.Provider>;
}

export { GlobalContext, UserContext };
