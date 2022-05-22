import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/navbar/Sidebar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Button from "react-bootstrap/Button";

function App() {
    const [refresh, setRefresh] = useState(true);

    return (
        <div className="App">
            <Router>
                <div className="sideBar">
                    <Sidebar />
                    <Button href="/new-post">
                        New post
                    </Button>
                </div>
                {/* <CreatePostForm /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/new-post' element={<CreatePostForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
