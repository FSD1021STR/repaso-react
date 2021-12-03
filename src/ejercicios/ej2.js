import React, { useState } from "react";
import "./ej2.css";

const Ej2 = () => {
  
  const [onMouseEnterCounter, setOnMouseEnterCounter] = useState(0);
  const [onMouseMoveCounter, setOnMouseMoveCounter] = useState(0);
  const [onMouseOverCounter, setOnMouseOverCounter] = useState(0);

  const handleReset = () => {
      setOnMouseOverCounter(0);
      setOnMouseEnterCounter(0);
      setOnMouseOverCounter(0);
  }

  return (
    <div className="container">
      <div
        className="father"
        onMouseMove={() => setOnMouseMoveCounter(onMouseMoveCounter + 1)}
      >
        <div className="child">Mouse Move: {onMouseMoveCounter}</div>
      </div>
      <div
        className="father"
        onMouseEnter={() => setOnMouseEnterCounter(onMouseEnterCounter + 1)}
      >
        <div className="child">Mouse Enter: {onMouseEnterCounter}</div>
      </div>
      <div
        className="father"
        onMouseOver={() => setOnMouseOverCounter(onMouseOverCounter + 1)}
      >
        <div className="child">Mouse Over: {onMouseOverCounter}</div>
      </div>
      <button className="reset" onClick={handleReset}> reset </button>
    </div>
  );
};
export default Ej2;
