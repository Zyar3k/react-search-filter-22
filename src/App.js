import React from "react";
import "./App.css";

import { Users } from "./users";

function App() {
  return (
    <div className="app">
      <input type="text" placeholder="Search..." className="search" />
      <ul className="list">
        {Users.map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
