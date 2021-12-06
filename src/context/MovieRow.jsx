import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./CartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  console.log("userContext", userContext);

  const cartContext = useContext(CartContext);
  console.log("cartContext", cartContext);

  return (
    <div>
      Movie Row for user:{" "}
      {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
