import React, { useReducer } from "react";

const initState = {
  count: 0, //1st state
  counter: 5, //2nd state
};

const reducer = (state, action) => {
  switch (action.type) {
    case "++":
      return { ...state, count: state.count + action.value };
    // init state 'count=0' -> state concatinate count = value change,
    // const [count, setCount]= useState(0); ->
    // setCount(count + 1) convert to -> dispatch('anything state change')
    case "--":
      return { ...state, count: state.count - action.value };
    //same way

    //new case by counter state
    case "+++":
      return { ...state, counter: state.counter + action.value };
    case "---":
      return { ...state, counter: state.counter - action.value };
    case "rest":
      return initState;
    // direct init state but as that same procedure
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);

  //onClick handler 1st fn
  const increse = () => {
    dispatch({ type: "++", value: 2 });
  };

  const decrese = () => {
    dispatch({ type: "--", value: 3 });
  };

  const rest = () => {
    dispatch({ type: "rest" });

    //onClick handler 2nd fn
  };

  return (
    <div>
      <div>
        <button onClick={increse}>+</button>
        <button onClick={decrese}>-</button>
      </div>
      <h1>({count.count})</h1>
      <div>
        <button onClick={rest}>reset</button>
      </div>

      <div>
        <h1>({count.counter})</h1>
        <button onClick={() => dispatch({ type: "+++", value: 5 })}>+</button>
        <button onClick={() => dispatch({ type: "---", value: 5 })}>-</button>
      </div>
    </div>
  );
};

export default UseReducer;
