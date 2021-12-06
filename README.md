# Advanced react

## branches sequence

- start
- higher-order-components
- hooks
- context-class-components
- context-functional-components

## Updating the Context

Login and Logout components in App.js: Login component will show if currentUser is not defined, Logout will show if the currentUser is defined:
 
```javascript
import Login from "./context/Login";
import Logout from "./context/Logout";

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
      ...
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
      ...
```

Login: the Login button will trigger the handleLogIn method in App component which will update the state and thus update the context:

```javascript
import React, { useContext } from "react";
import UserContext from "./userContext";

function Login(props) {
  const context = useContext(UserContext);

  //simulating providing a username during the login.
  return (
    <div>
      <button onClick={() => context.onLogIn("username")}>Login</button>
    </div>
  );
}

export default Login;
```

Logout is the same - it will trigger the handleLogOut in App component.

```javascript

```

```javascript

```

```javascript

```

```javascript

```