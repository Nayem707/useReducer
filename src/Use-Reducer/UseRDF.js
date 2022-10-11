import React, { useEffect, useReducer } from "react";

const intState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "DATA_ERROR":
      return {
        loading: false,
        post: {},
        error: "Data not found",
      };
    default:
      return state;
  }
};

const DataFatch = () => {
  const [state, dispatch] = useReducer(reducer, intState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())

      .then((json) => {
        dispatch({ type: "DATA_SUCCESS", payload: json.data });
      })
      .catch(() => {
        dispatch({ type: "DATA_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loadin..." : "show"}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFatch;
