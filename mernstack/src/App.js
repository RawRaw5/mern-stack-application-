import React from 'react';
import './App.css';
import CreatePost from './create_post';
import SideNav from './navbar/Sidebar';



function App() {
  return
      <div className="App">
        <CreatePost />   
        <Sidebar />
      </div>;
}