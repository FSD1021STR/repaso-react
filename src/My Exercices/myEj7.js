import React from "react";
import { useState } from "react/cjs/react.development";

export const MyEj7 = () => {
    const [text, setText] = useState(" ")
    return(
        <div>
            <div>
                <h2>Practica con inputs
                    type password y reflejar 
                    lo que esta escrito.
                </h2>
            </div>
            <div>
                <label>Escribe en el Input: </label>
                <input type="password" onChange={event => setText(event.target.value)}/>
            </div>
            <div>
                <label>{text}</label>
            </div>
        </div>
    )
}