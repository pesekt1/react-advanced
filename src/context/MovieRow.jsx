import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const context = useContext(UserContext);
  console.log("context", context.currentUser);

  return (
    <div>
      Movie Row for user: {context.currentUser ? context.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
