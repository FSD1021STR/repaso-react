import React from "react";
import { useState } from "react/cjs/react.development";

export const MyEj9 = () => {
    const [name, setName] = useState (" ")
    const [lastName, setLastName] = useState (" ")
    return ( 
        <div>
           <div>
                <h1>Vamos con Inputs type submit</h1>
            </div> 
            <div>
                <label>Name</label>
                <input type="text" placeholder="Whats ur name?" onChange={event => setName(event.target.value)}/>
            </div>
            <div>
                <label>LastName</label>
                <input type="text" placeholder="Whats ur lastName?" onChange={event => setLastName(event.target.value)}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
            <div>
                <label>
                    My Name is: {name}
                </label>
                <br/>
                <label>
                    My LastName is: {lastName}
                </label>
            </div>
        </div>
    )
}