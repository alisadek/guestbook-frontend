import React from 'react';

import Header from "./Components/Navigation/Header";
import Footer from "./Components/Navigation/Footer";
import Comment from './Components/UIElements/Comment';
import CreateArea from './Components/UIElements/CreateArea';
import './App.css';


function App() {
return(
  <div>
  <Header />
  <main>
  <Comment />
  <CreateArea />
  </main>
  <Footer />
  
  </div>
);
}

export default App;
