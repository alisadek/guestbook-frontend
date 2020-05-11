import React, { useState } from 'react';

import Header from "./Components/Navigation/Header";
import Footer from "./Components/Navigation/Footer";
import Comment from './Components/UIElements/Comment';
import CreateArea from './Components/UIElements/CreateArea';
import './App.css';


function App() {
  const [comments, setComments] = useState ([]);

function addComment(newComment){
  setComments(prevComments => {
    return ([...prevComments, newComment]);
  }); 
}

return(
  <div>
  <Header />
  <main>
 
  {comments.map((commentItem, index) => {
    return(<Comment content = {commentItem} />)})}
  <CreateArea onAdd= {addComment} />
  </main>
  <Footer />
  
  </div>
);
}

export default App;
