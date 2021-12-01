import React, { useState } from "react";

const Ej9 = () => {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Introduce tu nombre y apellidos </h2>
        <label>Nombre:</label>
        <input />
        <br />
        <label>Apellido:</label>
        <input />
        <br />
        <button> Submit!</button>
      </form>

      <p></p>
      <p></p>
    </div>
  );
};
export default Ej9;
