import React, { useState } from "react";

import Input from "../FormElements/Input";
import "./NewComment.css";
import Card from "../UIElements/Card";
import { AuthContext } from "../../context/auth-context";

function NewComment(props) {
  const auth = AuthContext;
  const [comment, setComment] = useState({ content: props.value || "" , author: auth.userName});

  function handleChange(event) {
    const value = event.target.value;
    setComment({ content: value, id: props.id, author: auth.userName });
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
          <button style= {{backgroundColor: "#ee8572", color:"#fff", marginLeft: "200px"}} onClick={props.mode ? handleEditSubmit : handleSubmit}>
            Post
          </button>
        </form>
      </div>
    </Card>
  );
}

export default NewComment;
