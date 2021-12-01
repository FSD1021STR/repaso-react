import React, { useState } from "react";

const Ej8 = () => {
  const [seleccion, setSeleccion] = useState();
  const empleos = [
    "policia",
    "medico",
    "politico corrupto",
    "futbolista",
    "youtuber",
    "FullStack dev",
    "mecanico",
  ];

  return (
    <div>
      <h2>¿Qué quieres ser de mayor?</h2>
      <label>Elige: </label>
      <select onChange={(evento) => setSeleccion(evento.target.value)}>
        {empleos.map((empleo) => (
          <option> {empleo} </option>
        ))}
      </select>
      <br />
      <p>De mayor elijo ser: {seleccion}</p>
    </div>
  );
};

export default Ej8;
