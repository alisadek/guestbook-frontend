import React, { useContext } from "react";

// import Avatar from "./Avatar";
import { AuthContext } from "../../context/auth-context";
import "./Comment.css";

function Comment(props) {
  const auth = useContext(AuthContext);


    function handleDeletion(){
      props.onDelete(props.id);
    }
    

  return (
    <div className="comment">
      <h1> {props.uName}</h1>
      <p>{props.content}</p>

      {auth.isLoggedIn && <button>Edit</button>}
      {auth.isLoggedIn && <button>Reply</button>}
      {auth.isLoggedIn && <button onClick= {handleDeletion}>Delete</button>}
    </div>
  );
}

export default Comment;
