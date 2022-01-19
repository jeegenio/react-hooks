import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={handleClick}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
