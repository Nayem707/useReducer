import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

import { userContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState("Nayem Islam");
  const [users, setUsers] = useState("is am are");

  return (
    <userContext.Provider value={[user, users]}>
      <Home user={user} users={users} />
    </userContext.Provider>
  );
}

export default App;
