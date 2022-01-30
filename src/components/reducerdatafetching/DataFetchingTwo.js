import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = { loading: true, error: "", post: {} };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something is wrong!",
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, post } = state;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingTwo;
