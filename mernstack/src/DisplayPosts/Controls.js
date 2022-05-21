import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Controls = (props) => {
    const {pullFunction, postId} = props
    // const [data, setData] = useState("");

    const deletePost = async (id) => {
        try {
            console.log(id)
            const res = await axios.delete('https://mernstack-application.herokuapp.com/posts/' + id);
            pullFunction();
            console.log('successfully deleted')
        } catch (error) {
            alert('delete post' + error);
        }
    };

    const editPost = async (id) => {
        try {
            const res = await axios.put('https://mernstack-application.herokuapp.com/posts/', {id}, {
                title: "",
                body: "",
                author: "",
                sport: ""
            })
            console.log("Item successfully updated")
        } catch (error) {
            // alert(error)
        }
    }


    return (
        <>
            {/* <Button onClick={()=>deletePost(postId)} className="me-3" variant="danger">
                Delete
            </Button> */}
            <Button>Like</Button>
        </>
    );
};

export default Controls;
