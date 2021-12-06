import React from "react";
import { useState } from "react/cjs/react.development";
import "./myEj5.css"

export const OnkeyEvents= () => {

    const [onKeyDown, setOnKeyDown]=useState(" ");
    const [onKeyUp, setOnKeyUp]= useState(" ");
    const [onKeyPress, setOnKeyPress]= useState(" ");

    const reset=()=>{
        setOnKeyDown(" ");
        setOnKeyUp(" ");
        setOnKeyPress(" ");
    }
    return(
        <div className="container">
            <div className="title">
                <h1>On Key Events</h1>
                <h2>Down - Up - PRESS</h2>
            </div>
            <div className="inputs">
                <div className="one">
                    <label>On Key Down:</label>
                    <input className={onKeyDown} onKeyDown={()=>setOnKeyDown("green")}/>
                </div>
                <div className="one">
                    <label>On Key Up:</label>
                    <input className={onKeyUp} onKeyUp={() => setOnKeyUp("gold")}/>
                </div>
                <div className="one">
                    <label>On Key Press:</label>
                    <input className={onKeyPress} onKeyPress={()=>setOnKeyPress("red")}/>
                </div>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}