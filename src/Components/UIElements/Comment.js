import React from "react";

import "./Comment.css"

function Comment(props){
return(
    <div className = "comment">
        <h1>Ali Sadek</h1>
        <p>This is how you'll see the comments, if you see this then comments are being rendered as expected</p>
    <button>DELETE</button>
    <button>EDIT</button>
    <button>REPLY</button>
    </div>
);
}

export default Comment; 