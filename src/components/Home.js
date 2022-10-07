import React, { useContext, useState } from "react";
import Cart from "./Cart";

import { userContext } from "../context/userContext";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const [book, setBook] = useState("cart");
  const [user, users] = useContext(userContext);

  return (
    <ThemeContext.Provider value={[book]}>
      <p>
        {user} {users}
      </p>

      <Cart book={book} />
    </ThemeContext.Provider>
  );
};

export default Home;
