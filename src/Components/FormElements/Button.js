import React from 'react';
import "./Button.css";

function Button(props) {
    return (
       <button  onClick={props.onClick} type= {props.type} />
    );
}

export default Button;
