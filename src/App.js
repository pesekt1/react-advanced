import React from "react";
import "./App.css";
import Movie from "./hoc/movie";
import Counter from "./hooks/counter";
import Users from "./hooks/users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";
import Logout from "./context/Logout";
import CartContext from "./context/CartContext";

class App extends React.Component {
  state = { currentUser: null };

  handleLogIn = (username) => {
    console.log("Getting user: " + username);
    const user = { name: "Tomas" }; //simulating calling the server
    this.setState({ currentUser: user });
  };

  handleLogOut = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <div className="App-body">
        <CartContext.Provider value={{ cart: [] }}>
          <Movie id={1} />
          <div>-------------------------------------------</div>
          <Counter />
          <div>-------------------------------------------</div>
          <Users />
          <div>-------------------------------------------</div>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLogIn: this.handleLogIn,
              onLogout: this.handleLogOut,
            }}
          >
            <MoviePage />
            {!this.state.currentUser && <Login />}
            {this.state.currentUser && <Logout />}
          </UserContext.Provider>
          <div>-------------------------------------------</div>
        </CartContext.Provider>
      </div>
    );
  }
}

export default App;
