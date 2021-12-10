import React from "react";
import { useState } from "react/cjs/react.development";

export const Form2 = () => {

    const [food, setFood] = useState ("")
    const [restaurant, setRestaurant] = useState ("")
    const [city, setCity] = useState ("")

    const [food1, setFood1] = useState ("")
    const [restaurant1, setRestaurant1] = useState ("")
    const [city1, setCity1] = useState ("")
    

    const handleSubmit = (event) => {
        event.preventDefault()
        setFood1(food)
        setRestaurant1(restaurant)
        setCity1(city)
    }

    return(
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <div>
                    <h2>Second Form by myself</h2>
                </div>
                <div>
                    <h3>Please let me know ur fav food</h3>
                    <label>Food</label>
                    <br/>
                    <input onChange={event => setFood(event.target.value)}/>
                </div>
                <div>
                    <h3>Now, say ur favourite Restaurant and the city 
                        where the restaurant is:
                    </h3>
                    <label>Restaurant</label>
                    <br/>
                    <input onChange={event => setRestaurant(event.target.value)}/>
                    <br/>
                    <label>City</label>
                    <br/>
                    <input onChange={event => setCity(event.target.value)}/>
                </div>
                <div>
                    <button type="submit">Click Me!</button>
                </div>
                <div>
                    <label>Fav Food: {food1} </label>
                    <label>Fav Restaurant: {restaurant1} </label>
                    <label>City: {city1} </label>
                    
                </div>
            </form>
        </div>
    )
}