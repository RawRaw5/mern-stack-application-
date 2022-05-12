import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './sideNav';

function App(props, state) {
  return (
    <div className="container">
      <SideNav name='home'/>
    </div>
  );
}

export default App;
