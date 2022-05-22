import React from 'react'
// import "../App.css";
import { SidebarData } from './SidebarData'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        // <li>
                        //     <Link to='/'>{val.title}</Link>
                        // </li>
                        <li 
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""}
                        onClick={()=> {
                            window.location.pathname = val.link;
                            }}
                            >
                                                        
                            <Link to='/' style = {{display: 'flex', flexDirection: 'row'}}>
                            <div id="icon">{val.icon}</div>
                            <div className="link-secondary" id="title">{val.title}</div>
                            </Link>
                            
                        </li>
                    )
                })}</ul>
        </div>
    )
}
export default Sidebar