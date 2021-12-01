import React, { useState } from "react";
import "./ej5.css";

const Ej5 = () => {
  const [onKeyDown, setOnKeyDown] = useState("");
  const [onKeyUp, setOnKeyUp] = useState("");
  const [onKeyPress, setOnKeyPress] = useState("");

  return (
    <div>
      <h2> Keyboard Events </h2>
      <label>on key down: </label>
      <input className={onKeyDown} onKeyDown={() => setOnKeyDown("blue")} />
      <br />
      <label>on key up: </label>
      <input className={onKeyUp} onKeyUp={() => setOnKeyUp("red")} />
      <br />
      <label>on key press: </label>
      <input className={onKeyPress} onKeyPress={() => setOnKeyPress("green")} />
      <br />
    </div>
  );
};

export default Ej5;
