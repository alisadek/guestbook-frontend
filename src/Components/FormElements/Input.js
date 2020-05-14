import React from "react";

import "./Input.css";

function Input(props) {
  const element =
    props.element === "input" ? (
      <input id={props.id} placeholder={props.placeholder} type={props.type} value= {props.value} onChange= {props.onChange} name= {props.name} />
    ) : (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        rows={props.rows || 3}
        onChange= {props.onChange}
        value = {props.value||""}
  
      />
    );
  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}

export default Input;
