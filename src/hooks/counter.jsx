import React, { useState, useEffect } from "react";

function Counter(props) {
  // const array = useState(0); // returns an array with a state property and setState function for that property
  // const count = array[0]; //like this.state.count
  // const setCount = array[1]; //like this.setState()
  const [count, setCount] = useState(0); //array destructuring - initiate a state property count and set it to 0.
  const [name, setName] = useState("");

  //ComponentDidMount
  //ComponentDidUpdate
  useEffect(() => {
    document.title = `${name} clicked ${count} times.`;
    //ComponentWillUnmount
    return () => {
      console.log("cleanup");
    };
  }, [count, name]); //array of dependencies on which useEffect is applied

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
