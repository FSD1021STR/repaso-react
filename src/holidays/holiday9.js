import React, { useState } from "react";

const HolidayForm = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [gender, setGender] = useState ("")

    const [user, setUser] = useState("")

    /*const [userName, setUsername] = useState ("")
    const [userSurname, setUsersurname] = useState("")
    const [gender1, setGender1] = useState("")
    
    Esta opcion no me funciona
    */

    const handleOnSubmit = event => {
        event.preventDefault();
        setUser({
            name: name,
            surname: surname,
            gender: gender
        });

        /*
        setUsername(name);
        setUsersurname(surname);
        
        Esto forma parte de la opcion que no me funciona
        Funciona igual que si utilizase un input de la manera que
        los ejecicios anteriores, pasa los eventos segun los voy 
        escribiendo.*/

    };
    return(
        <div>
            <div>
                <form onChange={event =>handleOnSubmit(event)}>
                    <h3>Give us your Name and Surname</h3>
                    <label>Name:</label>
                    <input onChange={event => setName(event.target.value)} placeholder="Name"/>
                    <br/>
                    <label>Surname:</label>
                    <input onChange={event => setSurname(event.target.value)} placeholder="Surname"/>
                    <br/>
                    <label>Gender:</label>
                    <select onChange={event => setGender(event.target.value)}>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Other</option>
                    </select>
                    <br/>
                    <button type="submit">Submit!</button>
                </form>
            </div>
            <div>
                <p>User Name: {user.name}</p>
                <p>User Surname: {user.surname}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    )
}

export default HolidayForm;