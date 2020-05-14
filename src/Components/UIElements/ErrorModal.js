import React from 'react';

import Modal from "./Modal";
import Button from "../FormElements/Button";
import "../FormElements/Button.css";

const ErrorModal = props => {
  return (
    <Modal
      className= "authentication"
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button type= "submit" onClick={props.onClear}>Okay</Button>}
      footerClass="place-item__modal-action"
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
