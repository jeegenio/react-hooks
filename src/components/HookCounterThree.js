import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  //   const firstChange = (e) => {
  //     // setName({ ...name, firstname: e.target.value });
  //     setName((prev) => ({ ...prev, firstname: e.target.value }));
  //   };

  //   const lastChange = (e) => {
  //     // setName({ ...name, lastname: e.target.value });
  //     setName((prev) => ({ ...prev, lastname: e.target.value }));
  //   };

  const onChange = (e) => {
    setName((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form>
        <input type="text" value={name.firstname} onChange={onChange} name="firstname" />
        <input type="text" value={name.lastname} onChange={onChange} name="lastname" />
        <h2> First Name: {name.firstname}</h2>
        <h2> Last Name: {name.lastname}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
