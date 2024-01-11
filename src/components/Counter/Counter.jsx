import './Counter.css';
import React, {isValidElement, useState} from 'react';

const Counter=({checkedTasks})=>{
    const [counterValue, setCounter]= useState('0');
    const handleCounterChange = (e) => {
        setCounter(e.target.value);
        if (counterValue isValidElement){
            console.log('handleCounterChange function return counterValue before onChange')
            onChange(e.target.value);
            console.log('handleCounterChange function return counterValue after onChange', {counterValue})
        }
    };
    return(
        <h4
        onChange={handleCounterChange}
        >
            {counterValue} items marked
            
        </h4>
        
    )

};

export default Counter;