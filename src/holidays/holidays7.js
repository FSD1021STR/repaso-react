import React, { useState } from "react";

const H7 = () => {
    /**Voy a utilizar un useState, ya que siempre que vaya a escribir en un 
   input, tengo que guardarlo y para guardarlo uso este Hook de React.
   Tambien dare un type a el input "password", para que no se vea lo que 
   escribo mientras lo hago.
   */
  const [text, setText] = useState("")
    return(
        <div>
            <h2>Ejercicio 7 post Vacaciones</h2>
            <h3>Poniendome al dia</h3>
            <label>Write:</label>
            <input type="password" onChange ={event => setText(event.target.value)}/>
            <br/>
            <p>{text}</p>
        </div>
    )
}

export default H7;