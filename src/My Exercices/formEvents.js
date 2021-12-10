/*Cada vez que hacemos un Input, necesitamos del UseState para poderlo guardar
El evento onSubmit, recoge toda la info que hemos guardado en nuestros UseState, 
se manda a nuestro BackEnd.
Con los tags <select/>, tambien hay que darles un UseState con el fin de que 
guarden la seleccion, y con el evento onChange puedan notar este tipo de evento.
<select/> => 1. UseState, 2. onChange => {event => setXXX(event.target.value)}
<select onChange => {...}/>{(en caso de que haya Array)array.map(x =><option>x</option>}</option></select>)}

*/

import React from "react";
import { useState } from "react/cjs/react.development";
import "./formEvents.css"

export const Forms7 = () => {
    const [write, setWrite] = useState (" ")
    const futures = ["Baller","Dealer","Model","Soldier","Full Stack Developer"]
    const [job, setJob] = useState (" ")
    const shopping = ["AppleStore","AndroidStore","Sport Clothing","Foods","Travels"]
    const [wasteMoney, setWasteMoney] = useState (" ")
    const handleOnSubmit = () => {
        
    }
    return(
        <div className="form7">
            <div className="botones">
                <button><a href="#ejercicio 7" alt="boton ej7">Go to Ej.7</a></button>
                <button><a href="#ejercicio 8">Go to Ej.8</a></button>
                <button><a href="#ejercicio 9">Go to Ej.9</a></button>
                <button><a href="#ejercicio 10">Go to Ej.10</a></button>
            </div>
          
            <div className="titulo" id="ejercicio 7">
                <h1>En este archivo formEvents.js voy a hacer los ejercicios
                    7, 8 y 9.
                </h1>
            </div>
            <div className="cuerpo">
                <div>
                    <h2>Ej. 7</h2>
                    <h2>What I'm writting?</h2>
                </div>
                <div>
                    <label>Write here: </label>
                    <br/>
                    <input type="password" placeholder="u don't know whats here" 
                    onChange={event => setWrite(event.target.value)}/>
                    <br/>
                    <label>Wrote: {write}</label>
                </div>
            </div>
            <div className ="ej8" id="ejercicio 8">
                <div className="titulo">
                    <h2>Ej. 8</h2>
                    <h2>What would U b in 5 years?</h2>
                    <label>{futures.join(", ")}</label>
                </div>
                <div className="cuerpo">
                    <label>Choose ur future: </label>
                    <select onChange={event => setJob(event.target.value)}>
                        {futures.map(future => <option>{future}</option>)}
                        <option></option>
                    </select>
                    <br/>
                    <label>I wan't to be {job}</label>
                </div>
            </div>
            <div className="ej9" id="ejercicio 9">
                <div className="titulo">
                    <h2>Ej. 9 Formulario</h2>
                    <h3>This is my 1st Form</h3>
                    <p>This form is for Crossfit athletes. We want to know
                        where do u work out and whats your favorite Crossfit move.
                    </p>
                </div>
                <div className="formulario">                   
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <h3>Which is ur Box</h3>
                            <label>Box: </label>
                            <input/>
                        </div>
                        <div>
                            <h3>Which is ur Fav Move</h3>
                            <label>Move: </label>
                            <input/>
                        </div>
                        <div>
                            <h3>Athlete Info</h3>
                            <label>Box: </label>
                            <br/>
                            <label>Fav Move: </label>
                        </div>
                    </form>
                </div>
            </div>
            <div className="ej10" id="ejercicio 10">
                <div className="titulo">
                    <h2>Ej. 10 Ejercicio de Select con Array</h2>
                </div>
                <div className="cuerpo">
                    <label>
                        What do u wan't 4 Christmast?
                    </label>
                    <label>Choose one: {shopping.join(", ")}</label>
                    <select onChange={event => setWasteMoney(event.target.value)}>
                        {shopping.map(shop => <option>{shop}</option>)}
                    </select>
                    <br/>
                    <label>Please, I wan't u to buy {wasteMoney} for me</label>
                </div>
            </div>
            
        </div>
    )
}


