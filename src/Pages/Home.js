import React, { useState } from 'react'
import NewComment from '../Components/FormElements/NewComment';
import Comment from '../Components/FormElements/Comment';

export default function Home() {

    const [comments, setComments] = useState ([]);

    function addComment(newComment){
      setComments(prevComments => {
        console.log(newComment);
        return ([...prevComments, newComment]);
      }); 
    }

    return (
         <div>
         
          {comments.map((commentItem, index) => {
            return(<Comment id={index} content = {commentItem.content} uName = "Ali Sadek" />)})}
          <NewComment onAdd= {addComment} />
          
          </div>
    )
}
