import React, { useState } from "react";
import "./ej2.css";

const Ej3 = () => {
  const [onMouseLeaveCounter, setOnMouseLeaveCounter] = useState(0);
  const [onMouseMoveCounter, setOnMouseMoveCounter] = useState(0);
  const [onMouseOutCounter, setOnMouseOutCounter] = useState(0);

  const handleReset = () => {
    setOnMouseLeaveCounter(0);
    setOnMouseMoveCounter(0);
    setOnMouseOutCounter(0);
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
        onMouseLeave={() => setOnMouseLeaveCounter(onMouseLeaveCounter + 1)}
      >
        <div className="child">Mouse Leave: {onMouseLeaveCounter}</div>
      </div>
      <div
        className="father"
        onMouseOut={() => setOnMouseOutCounter(onMouseOutCounter + 1)}
      >
        <div className="child">Mouse Out: {onMouseOutCounter}</div>
      </div>
      <button className="reset" onClick={handleReset}> reset </button>
    </div>
  );
};
export default Ej3;
