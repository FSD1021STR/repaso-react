import React from "react";
import { useState } from "react/cjs/react.development";
import "./myEj8.css"
export const MyEj8 = () => {
    const [choose, setChoose] = useState (" ")
    const [icon, setIcon] = useState (" ")
    const players = ["CR7","Messi","R9","Djalminha","Suker", "Laudrup", "Mbappe"]
    return (
        <div className="container">
        <div>
            <div className="descriptio">
                <h1>Trabajaremos con <select/>, .map, onChange...</h1>
            </div>
            <div className="test">
                <label>Choose: </label>
                <select onChange={event => setChoose(event.target.value)}>
                    <option>Maradona</option>
                    <option>DiStefano</option>
                    <option>CR7</option>
                    <option>Messi</option>
                    <option>Beckham</option>
                </select>
                <div>
                    <label>My fav player is: {choose} </label>
                </div>
                <p>En este caso no hemos trabajado con un Array</p>
            </div>
            <div>
                <div>
                    <h1>Vamos con el Array para un select y mostrar esta eleccion</h1>
                </div>
                <div className="test">
                    <label>Elige:</label>
                    <select onChange={event => setIcon(event.target.value)}
                    >{players.map(player => <option>{player}</option>)}</select>
                <div>
                    <label>Fav Icon: {icon}</label>
                </div>
                </div>
                
            </div>
            
        </div>
        </div>
    )
}