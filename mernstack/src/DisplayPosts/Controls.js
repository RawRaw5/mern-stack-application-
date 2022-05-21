import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Controls = () => {
    const [data, setData] = useState("");

    const deletePost = async (id) => {
        try {
            const res = await axios.delete('https://mernstack-application.herokuapp.com/posts/:id');
            console.log("Item successfully deleted.");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <>
            <Button className="me-3" variant="danger">
                Delete
            </Button>
            <Button>Edit</Button>
        </>
    );
};

export default Controls;
