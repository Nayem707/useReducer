import React from "react";
import { useAPI } from "../../context/ApiContext";

function Home() {
  const { post } = useAPI();
  console.log(post);
  return (
    <>
      {post.map((u) => {
        return <li key={u.id}>{u.name}</li>;
      })}
    </>
  );
}

export default Home;
