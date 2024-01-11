import React from 'react';
import './Button.css';

const Button = ({ name, type, value, onClick, className, children }) => {
    return (
        <div>
            <button
                type={type}
                id={name}
                name={name}
                value={value}
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;
