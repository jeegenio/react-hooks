import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const IncrementByFive = () => {
    setCount((prevCount) => count + 5);
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount((prevCount) => count + 1)}> Increment </button>
      <button onClick={() => setCount((prevCount) => count - 1)}> Decrement </button>
      <button onClick={IncrementByFive}> Increment By Five </button>
    </div>
  );
}

export default HookCounterTwo;
