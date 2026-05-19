import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <>
      <button onClick={() => setShowCounter(!showCounter)}>Show Counter</button>
      {showCounter && <Counter />}
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

export default App;
