import React, { useState } from "react";
import "./myEj1.css"

export const Contador = () => {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count+1)
    }

    const stealOne = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="grandFather">
            <div className="titleCase">
                <h1 className="Clicks">Clicks with UseState</h1>
            </div>
            <div className="counterCase">
                <p className="counter">{count}</p>
            </div>
            <div className="buttons">
                <div>
                    <button className="b1" onClick={addOne}>Add 1</button>
                </div>
                <div>
                    <button className="bsteal" onClick={stealOne}>Steal 1</button>
                </div>
                <div>
                    <button className="b2" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

