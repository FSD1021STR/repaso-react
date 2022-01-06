import React, { useState } from "react";

const H8 = () => {
    const [selection, setSelection] = useState("")
    const [fit, setFit] = useState ("")
    const moves = 
    ["Pull up", 
    "Dip", 
    "Push up", 
    "Squat", 
    "Mucles up",
    "Lunge"]

    return(
        <div>
            <div>
                <h2>Ejercicio con el tag select usando option,
                    sin Array.
                </h2>
                <p>Select nos va a dar un desplegable para elegir
                    entre distintas opciones.
                </p>
                <label>Choose:</label>
                <select onChange={event => setSelection(event.target.value)}>
                    <option>Full Stack</option>
                    <option>Front End</option>
                    <option>Back End</option>
                    <option>UX/UI</option>
                </select>
                <p>I like {selection}.</p>
            </div>
            <div>
                <h2>Con Array y por lo tanto usando .map en vez
                    de option.
                </h2>
                <label>Choose a move:</label>
                <select onChange={event => setFit(event.target.value)}>
                    {moves.map(move => <option>{move}</option>)}
                    </select>
                <p>My fav move is {fit}</p>
            </div>
        </div>
    )
}

export default H8;