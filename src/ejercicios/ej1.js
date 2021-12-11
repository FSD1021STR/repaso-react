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
  const handleOnClickQuitar1 =() => {
    setContador( contador-1);
  }

  return (
    <div>
      <h2>Cuantos clicks puedes dar antes de cansarte?</h2>
      <div className='nom'>
      <label>{contador}</label>
      </div>
      <div>
      <button className="counter" onClick={handleOnClickContador}>
        Click!
      </button>
      <button className="reset" onClick={handleOnClickReset}>reset!</button>
      <button className='quita' onClick={handleOnClickQuitar1}>Quita 1</button>
      </div>
    </div>
  );
};

export default Ej1;
