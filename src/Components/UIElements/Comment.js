import React from "react";
// import Avatar from "./Avatar";

import "./Comment.css";

function Comment(props) {
  return (

  
    <div className= "comment">
        <h1> Ali Sadek</h1>
      <p>{props.content}</p>
      <button>Edit</button>
      <button>Reply</button>
      <button>Delete</button>
    </div>
  );
}

export default Comment;
