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

    const likePost = async (id) => {
        try {
            const res = await axios.patch('https://mernstack-application.herokuapp.com/posts/' + id + '/like')
            console.log("Item successfully liked")
            window.location.reload(false)
        } catch (error) {
            // alert(error)
        }
    }


    return (
        <>
            <Button onClick={()=>deletePost(postId)} className="me-3" variant="danger">
                Delete
            </Button>
            <Button onClick={()=>likePost(postId)} className='me-3'>Like</Button>
        </>
    );
};

export default Controls;
