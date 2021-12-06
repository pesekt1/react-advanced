# Advanced react

## Context-functional-components

Functional components use context in much easier way.

useContext hook - available for functional components.

We simply call useContext() hook and pass some context object:
```javascript
import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const currentUser = useContext(UserContext);
  console.log("context", currentUser);

  return <div>{currentUser.name}</div>;
}

export default MovieRow;
```

Now we can use our functional component anywhere:
```javascript
import MovieRow from "./MovieRow";

class MovieList extends Component {
  render() {
    return (<MovieRow />);
  }
```
