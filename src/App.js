import React from "react";
import "./App.css";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";

function App() {
  return (
    <div className="App-body">
      <Movie id={1} />
      <Counter />
      <Users />
    </div>
  );
}

export default App;
