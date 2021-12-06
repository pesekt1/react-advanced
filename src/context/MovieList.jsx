import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <React.Fragment>
        <UserContext.Consumer>
          {(currentUser) => <div>MovieList for user: {currentUser.name}</div>}
        </UserContext.Consumer>
        <MovieRow />
      </React.Fragment>
    );
  }
}

//MovieList.contextType = UserContext;

export default MovieList;
