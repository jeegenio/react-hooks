import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingTwo() {
  const [album, setAlbum] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const handleChange = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${idFromButton}`).then((res) => {
      console.log(res);
      setAlbum(res.data);
    });
  }, [idFromButton]);

  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)}></input>
      <button onClick={handleChange}>Fetch Album</button>
      <div>{album.title}</div>
      {/* <ul>
        {albums.map((album) => (
          <li key={album.id}> {album.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetchingTwo;
