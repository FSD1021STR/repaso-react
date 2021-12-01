import React, { useState } from "react";

const Ej6 = () => {
  const frase = ["Hola", "que", "tal", "como", "estas"];
  const [text, setText] = useState("");
  const [resultado, setResultado] = useState("");


  const handleOnKeyPress = (eventoOnKeyPress) => {
    //Lo que quiero hacer este evento (lo que quiero hacer con esta tecla pulsada)
    if (eventoOnKeyPress.key === "Enter") {
        const existe = frase.some(palabra => palabra === text);
        if(existe === true){
          setResultado("existe");
        } else {
          setResultado("no existe");
        };
    };
  };


  return (
    <div>
      <h1>Introduce una palabra y pulsa "enter" para ver si existe</h1>
      <label> Frase: </label>
      <label>{frase.join(" ")}</label>
      <br />
      <label>Introduce palabra: </label>
      <input
        onChange={(eventoOnChange) => setText(eventoOnChange.target.value)} //texto "H" "Ho"
        onKeyPress={(eventoOnKeyPress) => handleOnKeyPress(eventoOnKeyPress)} // tecla 
      />
      <p>{resultado}</p>
    </div>
  );
};
export default Ej6;
