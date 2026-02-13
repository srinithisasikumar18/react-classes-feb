import React from 'react';
import "./Button.css";

const Button = ({ bgColor, label }) => {
    return (
        <div class="button-block">
            <button style={{ backgroundColor: bgColor }}>{label}</button>
        </div>
    )
}

export default Button;
