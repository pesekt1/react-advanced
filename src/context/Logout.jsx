import React, { useContext } from "react";
import UserContext from "./userContext";

const Logout = () => {
  const context = useContext(UserContext);

  return (
    <div>
      <button onClick={() => context.onLogout()}>Logout</button>
    </div>
  );
};

export default Logout;
