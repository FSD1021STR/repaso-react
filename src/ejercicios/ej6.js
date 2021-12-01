import React, { useState } from "react";

const Ej6 = () => {
  const frase = ["Hola", "que", "tal", "como", "estas"];
  const [text, setText] = useState("");
  const [resultado, setResultado] = useState("");

  const handleOnKeyPress = (evento) => {
    if (evento.key === "Enter") {
      const existe = frase.some((palabra) => palabra === text);
      if (existe === true) {
        setResultado("EXISTE!!");
      } else {
        setResultado("NO EXISTE!!");
      }
    }
  };

  return (
    <div>
      <h1>Introduce una palabra y pulsa "enter" para ver si existe</h1>
      <label> Frase: </label>
      <label>{frase.join(" ")}</label>
      <br />
      <label>Introduce palabra: </label>
      <input
        onKeyPress={handleOnKeyPress}
        onChange={(event) => setText(event.target.value)}
      />
      <p>{resultado}</p>
    </div>
  );
};
export default Ej6;