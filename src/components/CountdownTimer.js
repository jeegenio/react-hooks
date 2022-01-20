import React, { useEffect, useState } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    let timeLeft = {};
    const difference = +new Date("01/23/2022") - +new Date();

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // console.log(timeLeft);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // console.log(timeLeft);
  // const timerComponents = [];
  // Object.keys(timeLeft).forEach((interval) => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <span>
  //       {timeLeft[interval]} {interval}{" "}
  //     </span>
  //   );
  // });

  return (
    <div>
      <div>
        <h1>SALE IS LIVE</h1>
      </div>
      {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
      {timeLeft.seconds === 0 && timeLeft.minutes === 0 ? (
        <h1> Times up!!</h1>
      ) : (
        <h1 style={{ color: "blue" }}>
          {timeLeft.days} {timeLeft.hours} {timeLeft.minutes} {timeLeft.seconds}
        </h1>
      )}
      <div>
        <h5>days</h5>
      </div>
    </div>
  );
}

export default CountdownTimer;
