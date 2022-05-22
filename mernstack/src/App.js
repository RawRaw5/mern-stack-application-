import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/navbar/Sidebar";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import CreatePost from "./Components/CreatePostForm/CreatePost";


function App() {
    const [refresh, setRefresh] = useState(true);

    return (
        <div className="App">
            <Router>
                <div className="sideBar">
                    <Sidebar />
                </div>
                <CreatePost />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/create' element={<CreatePost />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
