# Advanced react

## branches sequence

- start
- higher-order-components
- hooks
- context

## Context

To avoid props drilling we can use a context: https://reactjs.org/docs/context.html

Example: Components MoviePage and MovieList. MovieList will be rendered inside the MoviePage.

### context in class components

createContext.js:
```javascript
import React from "react";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

export default UserContext;
```

App: Wrap MoviePage in UserContext.Provider and pass the value from the state property that we want to share:
```javascript
import UserContext from "./context/userContext";

class App extends React.Component {
  state = { currentUser: { name: "Tomas" } };

  render() {
    return (
      <div className="App-body">
        ...
        <UserContext.Provider value={this.state.currentUser}>
          <MoviePage />
        </UserContext.Provider>
      </div>
    );
  }
}
```

MoviePage:
```javascript
class MoviePage extends Component {
  render() {
    return (
      <div>
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;
```

MovieList:
```javascript
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
```

Explanation:

In render method we can consume the context by using UserContext.Consumer component. It expects a function - we cannot use a plain markup.

```javascript
render() {
  return (
    <UserContext.Consumer>
      {(currentUser) => <div>MovieList for user: {currentUser.name}</div>}
    </UserContext.Consumer>
```

If we want to use the context ouside of the render method, we set static contextType property to our UserContext:
```javascript
class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }
```

Another option how to set the contextType is this:
```javascript
class MovieList extends Component {...}
MovieList.contextType = UserContext;
export default MovieList;
```

```javascript

```

```javascript

```