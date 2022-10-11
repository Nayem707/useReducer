import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/users";

const DataFatch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())

      .then((data) => {
        setLoading(false);
        setPost(data);
        setError("");
      })

      .catch(() => {
        setLoading(false);
        setPost({});
        setError("opps! data not found");
      });
  }, []);

  return (
    <div>
      {loading ? "loading..." : post.name}
      {error ? error : null}
    </div>
  );
};

export default DataFatch;
