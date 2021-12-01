import React, { useState } from "react";

const Ej9 = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [resultado, setResultado] = useState({
    nombre,
    apellido,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setResultado({
      nombre: "Mi nombre es: " + nombre,
      apellido: "Mi apellido es:" + apellido,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Introduce tu nombre y apellidos </h2>
        <label>Nombre:</label>
        <input onChange={(evento) => setNombre(evento.target.value)} />
        <br />
        <label>Apellido:</label>
        <input onChange={(evento) => setApellido(evento.target.value)} />
        <br />
        <button type="submit"> Submit!</button>
      </form>

      <p>{resultado.nombre}</p>
      <p>{resultado.apellido}</p>
    </div>
  );
};
export default Ej9;
