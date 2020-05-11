import React, { useState } from "react";

import "./CreateArea.css";

function CreateArea(props){
    const [comment, setComment] = useState("");

    function handleChange(event){
        const value = event.target.value;
        setComment(value);
    }
    function submitComment(event){
        props.onAdd(comment);
        setComment("");
        event.preventDefault();
    }
    return(
    <div>
        <form>
        <textarea placeholder= "Write a Comment" col="3"  value = {comment} onChange = {handleChange}>
        </textarea>
        <button onClick = {submitComment}>post</button>
        </form>
    </div>
    );
}

export default CreateArea;