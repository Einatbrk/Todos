// Output.jsx
import React, { useState } from 'react';
import Button from '../Button/Button.jsx';
import './Output.css';

const Output = ({ outputText, removeFromList }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
        setIsChecked(true);
    };

    const handleClearButtonClick = () => {
        if (isChecked) {
            removeFromList(outputText);
            setIsChecked(false);
        } else {
            console.log('Check Box not checked');
        }
    };

    return (
        <div className="output-container">
            <div className="output-text">
                <input
                    type="checkbox"
                    id="outputCheckbox"
                    checked={isChecked}
                    onChange={handleCheckBoxChange}
                />
                <label htmlFor="outputCheckbox">{outputText}</label>
            </div>
            <Button
                name="clearOutput"
                type="submit"
                value="clearOutput"
                className="clearOutput"
                id="clearOutput"
                onClick={handleClearButtonClick}
            >
                Clear
            </Button>
        </div>
    );
}

export default Output;
