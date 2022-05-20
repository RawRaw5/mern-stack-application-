import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Example POST method implementation:
async function postData(url = "", data = {}) {
    console.log(data);
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
    return response.json();
}

const DisplayPosts = () => {
    const getPosts = () => {

        const [title, setTitle] = useState('');
        const [body, setBody] = useState('');
        const [author, setAuthor] = useState('');

        const [postInfo, setPostInfo] = useState([]);

        const postDetails = {
            postTitle: title,
            postBody: body,
            postAuthor: author,
        };
        console.log(JSON.stringify(postDetails));
        postData(
            "https://mernstack-application.herokuapp.com/posts/",
            postDetails
        ).then((data) => {
            setPostInfo(JSON.stringify(data))
            // console.log(JSON.stringify(data));
        })
    };
    getPosts()
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const postDetails = {
    //         title: title,
    //         body: body,
    //         author: author || "Anonymous",
    //     };
    //     console.log(JSON.stringify(postDetails));
    //     postData(
    //         "https://mernstack-application.herokuapp.com/posts/",
    //         postDetails
    //     ).then((data) => {
    //         console.log(data); // JSON data parsed by `data.json()` call
    //     });

    //     // var myInput = document.getElementById('text-box').value
    //     // console.log("test", myInput)
    //     // alert(JSON.stringify(myInput))
    //     //this returns the input as JSON in an alert
    // };

    return (
        <Container fluid>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DisplayPosts;
