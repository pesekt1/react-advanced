# Advanced react

## Consuming multiple contexts

CartContext:
```javascript
import React from "react";

const CartContext = React.createContext();
CartContext.displayName = "CartContext";

export default CartContext;
```

In App component we provide CartContext and inside we provide also a UserContext. Any component inside the providers has access to both contexts.

- Class component needs to use Context.Consumer. 
- Functional component can use useContext hook.
  
```javascript
class App extends React.Component {
...
  render() {
    return (
      <div className="App-body">
        <CartContext.Provider value={{ cart: [] }}>
          <UserContext.Provider value={{...}}>
            <MoviePage />
            ...
          </UserContext.Provider>
        </CartContext.Provider>
```

MovieRow - consume multiple contexts in the functional component using useContext hook:
```javascript
import UserContext from "./userContext";
import CartContext from "./CartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  console.log("userContext", userContext);

  const cartContext = useContext(CartContext);
  console.log("cartContext", cartContext);
  ...
```
