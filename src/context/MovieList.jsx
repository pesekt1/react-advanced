import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(currentUser) => <div>MovieList for user: {currentUser.name}</div>}
      </UserContext.Consumer>
    );
  }
}

//MovieList.contextType = UserContext;

export default MovieList;
