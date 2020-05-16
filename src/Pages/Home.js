import React, { useState, useContext, useEffect } from "react";
import NewComment from "../Components/Comments/NewComment";
import Comment from "../Components/Comments/Comment";
import { AuthContext } from "../context/auth-context";
import Card from "../Components/UIElements/Card";
import { useHttpClient } from "../Hooks/http-hook";
import ErrorModal from "../Components/UIElements/ErrorModal";

function Home() {
  const [comments, setComments] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [oldComment, setOldComment] = useState({ content: "", id: "" });
  const { error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/api/");
        setComments(responseData.foundComments);
      } catch {}
    };
    fetchComments();
  }, [sendRequest]);

  async function addComment(newComment) {
    try {
        await sendRequest(
        "http://localhost:5000/api/",
        "POST",
        JSON.stringify({
          content: newComment.content,
          creator: auth.userId,
          author: auth.userName
        }),
        { "Content-Type": "application/json" },
        
        // {Authorization: "Bearer"+ auth.token}
      );
      try {
        const responseData = await sendRequest("http://localhost:5000/api/");
        setComments(responseData.foundComments);
      } catch {}
    } catch (err) {}
    
    //  setComment({content: ""});
  }

  function deleteComment(id) {
    setComments((prevComments) => {
      return prevComments.filter((comment) => {
        return comment.id !== id;
      });
    });
  }

  function editComment(id, oldContent) {
    setOldComment(() => {
      return { content: oldContent, id: id };
    });
    setIsEditMode(true);
  }

 
  async function submitEdittedComment(edittedContent) {
    console.log(oldComment.id);
    console.log(edittedContent);
    try {
        await sendRequest(
        `http://localhost:5000/api/${oldComment.id}`,
        "PATCH",
        JSON.stringify({content:edittedContent.content}),
        {
          "Content-Type": "application/json"
        }
        );
        
    } catch (err) {}
    try {
      const responseData = await sendRequest("http://localhost:5000/api/");
      setComments(responseData.foundComments);
    } catch {}
    setIsEditMode(false);
    };
  
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {comments.map((commentItem, index) => {
          return commentItem.id === oldComment.id ? (
            isEditMode ? (
              <NewComment
                onEditSubmit={submitEdittedComment}
                value={oldComment.content}
                editMode={isEditMode}
                author= {auth.userName}
                key= {commentItem.id}
                id= {oldComment.id}
                mode= {isEditMode}
              />
            ) : (
              <Comment
                onDelete={deleteComment}
                key= {commentItem.id}
                id={commentItem.id}
                content={commentItem.content}
                author = {commentItem.author}
                creator={commentItem.author}
                onEdit={editComment}
                onEditSubmit={submitEdittedComment}
              />
            )
          ) : (
            <Comment
              onDelete={deleteComment}
              key={commentItem.id}
              id={commentItem.id}
              content={commentItem.content}
              author = {commentItem.author}
              creator={commentItem.creator}
              onEdit={editComment}
              onEditSubmit={submitEdittedComment}
            />
          );
        })}

        {auth.isLoggedIn ? (
          !isEditMode ? (
            <NewComment onAdd={addComment} />
          ) : null
        ) : (
          <Card className="comment">
            <h1>Please login to leave a comment</h1>
          </Card>
        )}
      </div>
    </React.Fragment>
  );
}

export default Home;
