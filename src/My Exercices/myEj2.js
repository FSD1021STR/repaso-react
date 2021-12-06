import React, { useState } from "react";
import "./myEj2.css"

export const MouseReactEvents = () => {

    const [onMouseEnterCounter,setOnMouseEnter]=useState(0);
    const [onMouseLeaveCounter,setOnMouseLeave]=useState(0);
    const [onMouseOverCounter,setOnMouseOver]=useState(0);
    const [onMouseMoveCounter,setOnMouseMove]=useState(0);

    const reset =()=>{
        setOnMouseEnter(0);
        setOnMouseLeave(0);
        setOnMouseOver(0);
        setOnMouseMove(0);
    }
    return(
        <div className="father">
            <div>
                <h1>Mouse React Events</h1>
                <h2>Mouse Enter, Mouse Leave and Mouse Over</h2>
            </div>
           <div className="eventDiv">
               <div className="majorDiv" onMouseEnter={()=>setOnMouseEnter(onMouseEnterCounter+1)}>
                <div className="smallDiv">
                    <label>Mouse Enter:{onMouseEnterCounter}</label>
                </div>
               </div>
               <div className="majorDiv" onMouseLeave={()=>setOnMouseLeave(onMouseLeaveCounter+1)}>
                <div className="smallDiv">
                    <label>Mouse Leave:{onMouseLeaveCounter}</label>
                </div>
               </div>
               <div className="majorDiv" onMouseOver={()=>setOnMouseOver(onMouseOverCounter+1)}>
                <div className="smallDiv">
                    <label>Mouse Over:{onMouseOverCounter}</label>
                </div>
               </div>
               <div className="majorDiv" onMouseMove={()=>setOnMouseMove(onMouseMoveCounter+1)}>
                <div className="smallDiv">
                    <label>Mouse Over:{onMouseMoveCounter}</label>
                </div>
               </div>

           </div>
           <div className="resetDiv">
               <button className="reset" onClick={reset}>RESET</button>
           </div>
        </div>
    )
}

