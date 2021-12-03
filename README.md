# Advanced react

## branches sequence

- start
- higher-order-components
- hooks

## hooks


### Functional components

From React 16.8 we have functional components where hooks can be used:

Example: functional component Counter:
```javascript
import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0); //array destructuring
  const [name, setName] = useState("");

  //ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    document.title = `${name} clicked ${count} times.`;
    //ComponentWillUnmount
    return () => {
      console.log("cleanup");
    };
  }, [count, name]); //array of dependencies on which useEffect is applied - optional

  return (
    <React.Fragment>
      <label>
        Name
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <h1>
        {name} clicked {count} times.
      </h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </React.Fragment>
  );
}

export default Counter;
```

Explanation:

### useState hook:
```javascript
import React, { useState, useEffect } from "react";

function Counter(props) {
  const array = useState(0); // returns an array with a state property and a setState function for that property
  const count = array[0]; //assign a name to that state property - like this.state.count
  const setCount = array[1]; //this.setState()
```

We can use array destructuring and write it in one line:
```javascript
const [count, setCount] = useState(0); //array destructuring
```

Now we can update the state of count property like this:
```javascript
return (
  ...
  <button onClick={() => setCount(count + 1)}>Increase</button>
```

### useEffect hook: 
for component's lifecycle: Takes care of all 3 functions:
- ComponentDidMount
- ComponentDidUpdate
- ComponentWillUnmount

```javascript
useEffect(() => { //ComponentDidMount + ComponentDidUpdate
  document.title = `${name} clicked ${count} times.`;

  return () => { //ComponentWillUnmount
    console.log("cleanup");
  };
}, [count, name]); //array of dependencies on which useEffect is applied - optional
```

### Custom hooks

We can extract any hook to a separate module and reuse the functionality.

Example for useEffect: extract setting document title to useDocumentTitle.js:

```javascript
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    //ComponentDidUpdate + ComponentDidMount
    document.title = title;

    return () => {
      //ComponentWillUnmount
      console.log("cleanup");
    };
  });
}
```

Now import it and use it in the counter component:
```javascript
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  ...
  useDocumentTitle(`${name} clicked ${count} times.`);
```


```javascript

```

```javascript

```

```javascript

```