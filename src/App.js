import React from "react";
import "./App.css";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends React.Component {
  state = { currentUser: { name: "Tomas" } };

  render() {
    return (
      <div className="App-body">
        <Movie id={1} />
        <div>-------------------------------------------</div>
        <Counter />
        <div>-------------------------------------------</div>
        <Users />
        <div>-------------------------------------------</div>
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
