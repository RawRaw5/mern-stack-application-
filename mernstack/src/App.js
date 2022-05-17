import React from 'react';
import './App.css';
import SideNav from './sideNav';
import React, {useState} from 'react';

function App(props, state) {
  return (
    <div className="container">
      <SideNav name='home'/>
    </div>
  );
}

export default App;
