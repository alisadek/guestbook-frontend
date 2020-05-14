import React, { useState, useContext } from "react";
import NewComment from "../Components/Comments/NewComment";
import Comment from "../Components/Comments/Comment";
import { AuthContext } from "../context/auth-context";
import Card from "../Components/UIElements/Card";

function Home() {
  const auth = useContext(AuthContext);
  const [comments, setComments] = useState([]);



  function deleteComment(id){
    setComments(prevComments=>{
    return ( 
        prevComments.filter ((comment, index)=>{
        return(id!==index);
        })
 );  
    });
}


  function addComment(newComment) {
    setComments((prevComments) => {
      console.log(newComment);
      return [...prevComments, newComment];
    });
  }

  return (
    <div>
      {comments.map((commentItem, index) => {
        return (
          <Comment  onDelete={deleteComment} id={index} 
          content={commentItem.content} 
          uName="Ali Sadek" />
        );
      })}
      {auth.isLoggedIn ? (
        <NewComment onAdd={addComment} />
      ) : (
        <Card className="comment">
          <h1>Please login to leave a comment</h1>
        </Card>
      )}
    </div>
  );
}

export default Home;
