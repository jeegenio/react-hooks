import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange}></input>
      <h2>{name}</h2>
      <button onClick={handleClick}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
