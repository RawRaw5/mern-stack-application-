import React, { useState } from "react";
import "./App.css";
import CreatePost from "./create_post";
import Sidebar from "./navbar/Sidebar";
import DisplayPosts from "./DisplayPosts/DisplayPosts";


function App() {
    const [refresh, setRefresh] = useState(true)
    return (  
        <div className="App">
            <div className="sideBar">
                <Sidebar />
            </div>
            <div style={{width:'40%'}}>
                <DisplayPosts refresh={refresh} setRefresh={setRefresh} />
            </div>
            <div>
                <CreatePost refresh={refresh} setRefresh={setRefresh} />
            </div>
        </div>
    );
}

export default App;
