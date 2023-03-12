import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

// data fatching

function GlobalContext({ children }) {
  return <UserContext.Provider value="hello">{children}</UserContext.Provider>;
}

export { GlobalContext, UserContext };
