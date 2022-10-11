import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <main>
      <div>
        <h1>Home Page</h1>
      </div>

      {/* logical operator here*/}
      <div>
        {
          loading ? "loading..." : "data show" // Trenary operator
        }

        {
          text || "hello" //or operator
        }
        <p>
          Value:
          {
            text && "follish" //and operator
          }
          'not found'
        </p>
        {
          !text && "loading..." // logical 'not-and' operator
        }
      </div>
    </main>
  );
};

export default Home;
