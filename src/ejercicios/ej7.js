import React, { useState } from "react";

const Ej7 = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>¿Qué estoy escribiendo?</h2>
            <label>Escribe: </label>
            <input type="password" onChange={evento => setText(evento.target.value)} />
            <br />
            <p>{text}</p>
        </div>
    )
};

export default Ej7;