import React, { useReducer } from "react";
import IntervalHookCounter from "./components/IntervalHookCounter";
// import CounterThree from "./components/reducer/CounterThree";
// import ComponentA from "./components/reducercontext/ComponentA";
// import ComponentB from "./components/reducercontext/ComponentB";
// import ComponentC from "./components/reducercontext/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
    //   <div className="App">
    //     {/* <UserContext.Provider value={"Warax"}>
    //     <ComponentB />
    //   </UserContext.Provider> */}
    //     {/* <CounterOne /> */}
    //     {/* <CounterTwo /> */}
    //     {/* <CounterThree /> */}
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <div>{/* <IntervalHookCounter /> */}</div>
  );
}

export default App;
