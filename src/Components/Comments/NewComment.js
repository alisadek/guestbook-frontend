import React, { useState } from "react";

import Input from "../FormElements/Input";
import "./NewComment.css";
import Card from "../UIElements/Card";

function NewComment(props) {

  const [comment, setComment] = useState({ content: props.value || "" });

  function handleChange(event) {
    const value = event.target.value;
    setComment({ content: value, id: props.id, user: props.creator });
  }

  function handleEditSubmit(event) {
    props.onEditSubmit(comment);
    setComment({});
    event.preventDefault();
  }

  function handleSubmit(event) {
    props.onAdd(comment);
    setComment({});
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
          <button onClick={props.mode ? handleEditSubmit : handleSubmit}>
            post
          </button>
        </form>
      </div>
    </Card>
  );
}

export default NewComment;
