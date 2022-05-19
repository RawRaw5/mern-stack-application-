import React from 'react';
import './App.css';
import CreatePost from './create_post';
import Sidebar from './navbar/Sidebar';



function App() {
  return
      <div className="App">
        <CreatePost />   
        <Sidebar />
      </div>;
}

export default App;