import React from 'react';
import './App.css';
import CreatePost from './create_post';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<CreatePost />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
