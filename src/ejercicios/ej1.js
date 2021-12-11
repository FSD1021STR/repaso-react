import React, {useState} from 'react';
import './ej1.css';

  //ejercicios useState
    function Ej1() {
        const [count, setCount]= useState (0);
    
        const handleOnClickIncrease = () => {
            setCount (count+1);
        }
        const handleOnClickDecrease = () => {
            setCount (count -1);
        }
        const handleOnClickReset = () => {
            setCount(0);
        }
    
        return (
            
            <div className='container'>
                <h2 className='title'>Cuantos clicks puedes dar antes de cansarte?</h2>
                <div className='counter'>
                    <label>{count}</label>
                </div>
                <div className='buttons'>
                    <button onClick={handleOnClickIncrease}>Increase  the counter value</button>
                    <button onClick={handleOnClickDecrease}>Decrease the counter value</button>
                    <button onClick={handleOnClickReset}>Reset the counter value</button>
                </div>
            </div>
        )
}

export default Ej1;
