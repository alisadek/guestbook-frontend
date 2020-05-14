import React, { useState, useContext } from "react";
import Modal from "../UIElements/Modal";

// import Avatar from "./Avatar";
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";
import "./Comment.css";

function Comment(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const auth = useContext(AuthContext);

    function showDeleteWarningHandler (){
      setShowDeleteModal(true);
    }
    function cancelDeleteWarningHandler(){
      setShowDeleteModal(false);
    }
    function confirmDeleteHandler(){
      props.onDelete(props.id);
      cancelDeleteWarningHandler();
    }


    

  return (
    <div>
    <Modal show= {showDeleteModal} onCancel={cancelDeleteWarningHandler} header = "Are you sure?" footerClass="place-item__modal-action" footer={
      <React.Fragment>
        <Button onClick={cancelDeleteWarningHandler}>Cancel</Button>
        <Button onClick={confirmDeleteHandler}>Delete </Button>
      </React.Fragment>
    } >
    <p>Deleting a message cannot be undone!</p>
  </Modal>
    <div className="comment">
      <h1> {props.uName}</h1>
      <p>{props.content}</p>:


      {auth.isLoggedIn && <button>Edit</button>}
      {auth.isLoggedIn && <button>Reply</button>}
      {auth.isLoggedIn && <button onClick= {showDeleteWarningHandler}>Delete</button>}
    </div>
    </div>
  );
}

export default Comment;
