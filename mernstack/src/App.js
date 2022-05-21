import React, { useState } from "react";
import "./App.css";
import Sidebar from "./navbar/Sidebar";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home"
import About from "./Components/About"


function App() {

    return (
        <div className="App">
            <Router>
                <div className="sideBar">
                    <Sidebar />
                </div>
                <Routes>
                    <Route path='/posts' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
