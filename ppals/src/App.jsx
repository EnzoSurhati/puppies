import { puppyList } from "./data.js";
import { useState } from "react";
import "./app.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);

  function handleClick(id) {
    console.log("Puppy id: ", id);
    setFeatPupId(id);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("Featured Puppy: ", featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
          {puppy.name}
        </p>
      ))}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
