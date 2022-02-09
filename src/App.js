import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, setUsers] = useState([
    { name: "Gideon", message: "Hello there" },
    { name: "Dragneelix", message: "I am a dragon" },
    { name: "Dragoonix", message: "I am the strogest creature in the world" },
    { name: "Igneelix", message: "I am a fairy dragon " },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
