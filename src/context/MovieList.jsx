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
          {(context) => (
            <div>
              Movie List for user:{" "}
              {context.currentUser ? context.currentUser.name : ""}
            </div>
          )}
        </UserContext.Consumer>
        <MovieRow />
      </React.Fragment>
    );
  }
}

//MovieList.contextType = UserContext;

export default MovieList;
