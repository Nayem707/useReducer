import React, { useContext, useState, useEffect, createContext } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [post, setPost] = useState({});

  const fatchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        console.log(data);
      })
      .catch(() => {
        setPost({});
      });
  };
  useEffect(() => {
    fatchData();
  }, []);

  return <APIContext.Provider value={{ post }}>{children}</APIContext.Provider>;
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
