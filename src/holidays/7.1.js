import React, { useState } from "react";

const H701 = () => {
    const [text, setText] = useState("")
    return(
        <div>
            <div>
                <h2>Pruebas posteriores al Ej7</h2>
                <label>Write in the input</label>
                <input type="password" placeholder="password Ej7" onChange={event=>setText(event.target.value)}/>
                <br/>
                <p>{text}</p>
            </div>
            <div>
                <label>Con el type email no percibo nada raro</label>
                <br/>
                <label>Con el type color si que me da una funcion
                    interesante, me deja elegir un color de la paleta
                    y me devuelve su descripcion.
                    <br/>
                    Seguire probando distintos types.
                </label>
            </div>
        </div>
    )
}

export default H701;