// Input.jsx
import React, { useState } from 'react';
import './Input.css';
import Button from '../Button/Button.jsx';

const Input = ({ name, onChange, onAddTask }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value); 
        }
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
          onAddTask(inputValue);
          setInputValue('');
        }
      };

    return (
        <div className="input">
            <input
                type="text"
                id={name}
                name={name}
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new task"
            />
            <Button
                name="addTask"
                type="submit"
                value="addTask"
                className="addTask"
                id="addTask"
                onClick={handleAddTask}
            >
                Add Task
            </Button>
        </div>
    );
}

export default Input;
