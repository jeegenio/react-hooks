import React, { useState } from "react";

function HookCounter() {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={incCounter}>Count {counter}</button>
    </div>
  );
}

export default HookCounter;
