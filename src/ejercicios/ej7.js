import React, { useState } from "react";

const Ej7 = () => {
    const [texto, setTexto] = useState("");

    return (
        <div>
            <h2>¿Qué estoy escribiendo?</h2>
            <label>Escribe: </label>
            <input type="password" onChange={evento => setTexto(evento.target.value)} /> 
            <br />
            <p>{texto}</p>
        </div>
    )
};

export default Ej7;