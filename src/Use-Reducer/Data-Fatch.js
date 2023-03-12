import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

const DataFatch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  const fatchData = () => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
        console.log(data[0].name);
      })

      .catch(() => {
        setLoading(false);
        setPost({});
        setError("opps! data not found");
      });
  };

  useEffect(() => {
    fatchData();
  }, []);

  return (
    <div>
      {post.map((p) => {
        return <p>{p.name}</p>;
      })}
      {error ? error : null}
    </div>
  );
};

export default DataFatch;
