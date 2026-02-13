import React from 'react';
import "./Button.css";

const Button = (props) => {
    return (
        <div class="button-block">
            <button style={{ backgroundColor: props.bgColor }}>{props.label}</button>
        </div>
    )
}

export default Button;
