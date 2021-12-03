import React, { useState } from "react";
import "./ej1.css";

const Ej1 = () => {
  const [contador, setContador] = useState(0);

  const handleOnClickContador = () => {
    setContador(contador + 1);
  };

  const handleOnClickReset = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Cuantos clicks puedes dar antes de cansarte?</h2>
      <label onClick={handleOnClickContador}>{contador}</label>
      <button className="counter" onClick={ handleOnClickContador}>
        Click!
      </button>
      <button className="reset" onClick={handleOnClickReset}>reset!</button>
    </div>
  );
};

export default Ej1;
