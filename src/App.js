import React from "react";
import "./App.css";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";

function App() {
  return (
    <div className="App-body">
      <Movie id={1} />
      <Counter />
    </div>
  );
}

export default App;
