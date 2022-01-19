import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { id: Math.floor(Math.random() * 9999999) + 1, value: Math.floor(Math.random() * 10) + 1 }]);
  };

  const handleDelete = (item) => {
    const updateItem = items.filter((x) => x.id !== item.id);
    setItems(updateItem);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.value}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
