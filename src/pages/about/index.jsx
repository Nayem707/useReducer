import React, { useState } from "react";
import { useGlobalContext } from "../../context/AppProvider";
import data from "../../data/data";

const About = () => {
  const { user, setUser } = useGlobalContext();
  const [people, setPeople] = useState(data);
  const [peoplep, setpeoplep] = useState("Iam data");

  return (
    <div>
      <h1>About page</h1>
      <p>{user}</p>
      <div>
        {people.map((p) => {
          const { id, name, profession } = p;
          return (
            <div key={id}>
              <p>{name}</p>
              <p>{profession}</p>
            </div>
          );
        })}
      </div>
      <p>{peoplep}</p>
      <button onClick={() => setpeoplep("heello")}>change</button>
    </div>
  );
};

export default About;
