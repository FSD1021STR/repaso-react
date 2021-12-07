import React from "react";
import { useState } from "react/cjs/react.development";

export const Input = () => {

    const frase = ["Hi","I'm","fighting","2","learn","JavaScript" ]
    const [ text, setText] = useState (" ")
    const [result, setResult] = useState (" ")
/*
    const handleOnKeyPress = (event) => {
        if (event === "Enter") {
            // const existe = frase.some (word => word === text);
        }
        if (existe === true) {
            setResult ("existe")
         }
         else {
             setResult ("No existe")
         }
    } */
    return(
        <div>
            <div>
                <h2>Vamos a hacer pruebas con los eventos de los inputs</h2>
            </div>
            <div>
                <label>{frase.join(" ")}</label>
            </div>
                <label>Input Test </label>
                <input type="text" placeholder="Test" onChange={event => setText(event.target.value)}/>
            <div>
                <label>{text}</label>
            </div>
        </div>
    )
}

/* 1. veo que sin ningun evento, si que puedo escribir en el input.
2. El placeholder es lo que esta escrito dentro del input como descripcion
3. CheckBox es la casilla para marcar como leido...Button lo convierte en boton
submit lo hace un botton de enviar
4. el evento onChange, va acompanhado de una hook UseState para guardar lo que 
se escribe en el imput que seran distintos datos.
5. a la hora de meter eventos en un imput, la sintaxis es la siguiente:
    a. Evento en cuestion (onChange, onKeyPress...)=.
    b. evento que le vayamos a pasar : event =>.
    c. funcion que hayamos creado y que vaya a recoger dicho evento (setX..).
    d.y el evento que vaya a recoger (event.target.value(onChange),event.key..)
 */
