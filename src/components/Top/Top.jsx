// Top.jsx
import React, { useState } from 'react';
import Input from '../Input/Input.jsx';
import './Top.css';

const Top = ({onAddTask}) => {

    return (
        <div className="top">
            <div className="blank"></div>
            <div className="top-container">
                <div className="top-content">
                    <div className="top-title">
                        <h1>TO DO</h1>
                    </div>
                    <div className="top-input-container">
                        <Input
                            name="newTask"
                            type="text"
                            onAddTask={onAddTask}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
