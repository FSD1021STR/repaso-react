import React, { useState } from "react";

const Ej9 = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
  });


  const handleSubmit = evento => {
    evento.preventDefault();

    //Mandariamos nombre, apellido hacía BE
    setUsuario({
      nombre: nombre,
      apellido: apellido
    })
  };

  return (
    <div>
      <form onSubmit={evento => handleSubmit(evento)}>
        <h2>Introduce tu nombre y apellidos </h2>
        <label>Nombre: </label>
        <input onChange={(evento) => setNombre(evento.target.value)} />
        <br />
        <label>Apellido: </label>
        <input onChange={(evento) => setApellido(evento.target.value)} />
        <br />
        <button type="submit"> Submit!</button>
      </form>

      <p>Mi nombre es: {usuario.nombre}</p>
      <p>Mi apellido es: {usuario.apellido}</p>
    </div>
  );
};
export default Ej9;
