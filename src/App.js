import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/reactrouter/About";
import ErrorPage from "./components/reactrouter/ErrorPage";
import Home from "./components/reactrouter/Home";
import Profile from "./components/reactrouter/Profile";
// import DataFetchingTwo from "./components/reducerdatafetching/DataFetchingTwo";
// import DataFetching from "./components/DataFetching";
// import ComponentB from "./context/ComponentB";

// import HookMouse from "./components/HookMouse";
// import IntervalHookCounter from "./components/IntervalHookCounter";

// import CounterThree from "./components/reducer/CounterThree";
// import ComponentA from "./components/reducercontext/ComponentA";
// import ComponentB from "./components/reducercontext/ComponentB";
// import ComponentC from "./components/reducercontext/ComponentC";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// export const CountContext = React.createContext();

// const initialState = { count: 0 };
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { count } = state;
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/profile"> Profile</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div>Footer</div>
    </Router>
    // <div className="App">

    //   {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}> */}
    //   {/* <UserContext.Provider value={"Warax"}>
    //     <ComponentB />
    //   </UserContext.Provider> */}
    //   {/* <CounterOne /> */}
    //   {/* <CounterTwo /> */}
    //   {/* <CounterThree /> */}
    //   {/* Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC /> *
    //   </CountContext.Provider> */}

    //   {/* <IntervalHookCounter /> */}

    //   {/* <DataFetchingTwo /> */}

    // </div>
  );
}

export default App;
