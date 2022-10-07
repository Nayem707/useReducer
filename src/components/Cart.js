import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Cart = () => {
  const [book] = useContext(ThemeContext);

  return <div>{book}</div>;
};

export default Cart;
