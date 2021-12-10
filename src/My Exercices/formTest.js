import React from "react";
import { useState } from "react/cjs/react.development";
import "./formTest.css"

export const FormTest = () => {
    
    const handleOnSubmit = (event) => {
        event.preventDefault();
        setBox1(box);
        setMove1(move);      
    }
    const reset = () => {
        setBox("");
        setMove("")
    }

    const [box, setBox] = useState ("")
    const [move, setMove] = useState ("")

    const [box1, setBox1] = useState ("")
    const [move1, setMove1] = useState ("")

    return (
        <div className="formulario">                   
                    <form onSubmit={handleOnSubmit}>
                        <div className="titleForm">
                            <h2>Crossfit Form</h2>
                            <p className="what2do">This is a Form 4 Crossfit Athletes. 
                                U Athlete have to
                                give us some info, ur homeBox 
                                and ur fav Crossfit Move!
                            </p>
                        </div>
                        <div className="both">
                            <div className="box">
                                <h3>Which is ur Box</h3>
                                <label>Box: </label>
                                <input onChange={event => setBox(event.target.value)}/>
                            </div>
                            <div className="move">
                                <h3>Which is ur Fav Move</h3>
                                <label>Move: </label>
                                <input onChange={event => setMove(event.target.value)}/>
                            </div>
                        </div>
                        <div className="submitDiv">
                            <button className="submitButton" className="twoButtons" 
                            type="submit">Send ur info</button>
                        </div>
                        <div className="masterJob">
                            <h3>Athlete Info</h3>
                            <label>Box: {box1}</label>
                            <br/>
                            <label>Fav Move: {move1}</label>
                        </div>
                        <div className="resetDiv">
                            <button className="resetButton" className="twoButtons" 
                            onClick={reset}>Reset</button>
                        </div>
                    </form>
                </div>
    )
}