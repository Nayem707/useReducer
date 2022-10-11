import React, { useReducer } from "react";

const initState = 0; //must need init state if you want anything

const reducer = (state, action) => {
  switch (action) {
    case "++":
      return state + 1;
    case "--":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  const increse = () => {
    dispatch("++");
  };

  const decrese = () => {
    dispatch("--");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increse}>+</button>
      <button onClick={decrese}>-</button>
    </div>
  );
};

export default UseReducer;
