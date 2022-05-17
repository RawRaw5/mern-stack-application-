import React, {useState} from 'react';
import './App.css';
import CreatePost from './create_post';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideNav from './sideNav';



function App(props, state) {
  return (
      <div className="App"
       <CreatePost />
      </div>
    <div className="container">
      <SideNav name='home'/>
    </div>

  );
}

export default App;
