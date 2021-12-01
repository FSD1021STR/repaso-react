import React, { useState } from "react";
import "./ej2.css";

const Ej4 = () => {
  const [enterLeaveCounter, setEnterLeaveCounter] = useState(0);
  const [overOutCounter, setOverOutCounter] = useState(0);
  return (
    <div className="container">
      <div
        className="father"
        onMouseEnter={() => setEnterLeaveCounter(enterLeaveCounter + 1)}
        onMouseLeave={() => setEnterLeaveCounter(enterLeaveCounter - 1)}
      >
        <div className="child">Mouse enter/leave: {enterLeaveCounter}</div>
      </div>
      <div
        className="father"
        onMouseOver={() => setOverOutCounter(overOutCounter + 1)}
        onMouseOut={() => setOverOutCounter(overOutCounter - 1)}
      >
        <div className="child">Mouse over/out: {overOutCounter}</div>
      </div>
    </div>
  );
};
export default Ej4;
