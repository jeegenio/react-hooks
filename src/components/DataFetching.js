import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  // const [idFromButtonClick, setidFromButtonClick] = useState(1);

  // const handleClick = () => {
  //   setidFromButtonClick(id);
  // };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch();
  }, [id]);
  return (
    <div>
      <input text={"text"} value={id} onChange={(e) => setId(e.target.value)}></input>
      {/* <button onClick={handleClick}>Fetch Post</button> */}
      <div>{post.title}</div>
      {/* <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
