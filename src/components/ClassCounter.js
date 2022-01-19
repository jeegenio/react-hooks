// import React, { Component } from "react";
import React, { useState } from "react";

// class ClassCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.incrementCount}> Count {this.state.count} </button>
//       </div>
//     );
//   }
// }

const ClassCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>{count}</h2>
    </div>
  );
};

export default ClassCounter;
