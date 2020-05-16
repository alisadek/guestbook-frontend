import React, { useState, useContext } from "react";
import Modal from "../UIElements/Modal";

// import Avatar from "./Avatar";
import { AuthContext } from "../../context/auth-context";
import Button from "../FormElements/Button";
import "./Comment.css";
import { useHttpClient } from "../../Hooks/http-hook";
import ErrorModal from "../UIElements/ErrorModal";

function Comment(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false); 
  const auth = useContext(AuthContext);
  const { error, sendRequest, clearError } = useHttpClient();

    function showDeleteWarningHandler (){
      setShowDeleteModal(true);
    }

    function cancelDeleteWarningHandler(){
      setShowDeleteModal(false);
    }

    async function confirmDeleteHandler(){
      setShowDeleteModal(false);
      try{
      await sendRequest(`http://localhost:5000/api/${props.id}`,"DELETE")
      }catch(err){};
      props.onDelete(props.id);
      cancelDeleteWarningHandler();
    }

    function handleEdit(event){
      props.onEdit(props.id, props.content);
      event.preventDefault();
    }
    

  return (
    <div>
    <Modal show= {showDeleteModal} onCancel={cancelDeleteWarningHandler} header = "Are you sure?" footerClass="place-item__modal-action" footer={
      <React.Fragment>
      <ErrorModal error= {error} onClear= {clearError} />
        <Button onClick={cancelDeleteWarningHandler}>Cancel</Button>
        <Button onClick={confirmDeleteHandler}>Delete </Button>
      </React.Fragment>
    } >
    <p>Deleting a message cannot be undone!</p>
  </Modal>
    <div className="comment">
      <h1> {props.author}</h1>
      <p>{props.content}</p>


      {auth.userId===props.creator && <button onClick={handleEdit}>Edit</button>}
      {auth.isLoggedIn && <button>Reply</button>}
      {auth.userId===props.creator && <button onClick= {showDeleteWarningHandler}>Delete</button>}
    </div>
    </div>
  );
}

export default Comment;
