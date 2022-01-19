import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function IntervalHookCounter() {
  const [sec, setSec] = useState(10);
  const [mins, setMins] = useState(60);

  const tick = () => {
    setSec((prev) => prev - 1);
    if (sec === 0) {
      setSec(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <div>{sec}</div>
      <div>{mins}</div>
    </div>
  );
}

export default IntervalHookCounter;
