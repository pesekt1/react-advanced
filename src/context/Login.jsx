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
