import React from "react";
import "./App.css";
import CreatePost from "./create_post";
import Sidebar from "./navbar/Sidebar";
import DisplayPosts from "./DisplayPosts/DisplayPosts";

function App() {
    return (
        <div className="App">
            <div className="sideBar">
                <Sidebar />
            </div>
            <div>
                <DisplayPosts />
            </div>
            <div className="createPost">
                <CreatePost />
            </div>
        </div>
    );
}

export default App;
