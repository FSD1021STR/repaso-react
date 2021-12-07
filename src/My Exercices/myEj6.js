import React from "react";
import { useState } from "react/cjs/react.development";
import "./myEj6.css"

export const MyEj6 = () => {
    const frase = ["Hola", "que", "tal", "como", "estas"];
    const [text, setText] = useState("")
    const [result, setResult]= useState(" ")
//cuando es una sola prop no hace falta el parentesis (event)
    const handleOnKeyPress = event => {
        
    }
    return(
        <div className="myEj6">
            <div className="titles">
                <h1>My Exercice 6 of React</h1>
                <div className="description">
                    <h2>Statement</h2>
                    <div className="exp">
                    <p>In this exercise we are going to set a phrase 
                    and then we are going to create an input 
                    where the word that we write in it returns 
                    us whether it exists or not.</p>
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="frase">Frase: {frase.join(" ")}</div>
                <div className="input">
                    <input onChange={event => setText(event.target.value)}
                            onKeyPress={event => handleOnKeyPress(event)}/>
                </div>
                <div className="answer">
                    <label>{text}</label>
                </div>
            </div>
        </div>
    )
}