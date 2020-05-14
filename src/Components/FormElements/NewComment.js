import React, { useState } from "react";

import Input from "./Input";
import "./NewComment.css";
import Card from "../UIElements/Card";

function NewComment(props) {
  const [comment, setComment] = useState({});

  function handleChange(event) {
    const value = event.target.value;
    setComment({content:value, id : props.id, user: props.uName});
  }
  function submitComment(event) {
    props.onAdd(comment);
    setComment({content: ""});
    event.preventDefault();
  }
  return (
    <Card className="comment">
    <div>
      <form>
        <Input
          element="textarea"
          type="text"
          placeholder="Write a Comment"
          rows="2"
          value={comment.content}
          onChange={handleChange}
        />
        <button onClick={submitComment}>post</button>
      </form>
    </div>
    </Card>
  );
}

export default NewComment;
