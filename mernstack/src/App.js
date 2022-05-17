import React from 'react';
import './App.css';
import CreatePost from './create_post';
import SideNav from './sideNav';



function App() {
  return (
    <div>
      <div className="App">
    <CreatePost />   
      </div>
      <div>
        <SideNav />
      </div>
      </div>
    
  );
}

export default App;
