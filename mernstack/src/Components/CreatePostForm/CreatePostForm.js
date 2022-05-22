import React, { useState } from "react";
// import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


// Example POST method implementation:
async function postData(url = "", data = {}) {
    console.log(data);
    const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return response.json();
}

function CreatePostForm(props) {
    const {refresh, setRefresh} = props
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const postDetails = {
            title: title,
            body: body,
            author: author || "Anonymous",
        };
        console.log(JSON.stringify(postDetails));
        postData(
            "https://mernstack-application.herokuapp.com/posts/",
            postDetails
        ).then((data) => {
            console.log(data);
            setRefresh(true)
        });
    };

    return (
        <div>
            <Card className='m-4' style={{ width: "30rem" }}>
                <Card.Header as="h5">Create Post</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text form-control"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Form.Text>
                                Please enter a title for your post.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text="
                                placeholder="Your name"
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                type="text form-control"
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="What are your thoughts?"
                            />
                            <Form.Text>
                                Write your post content here...
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Basketball"
                                value="Basketball"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Soccer"
                                value="Soccer"
                            />
                        </Form.Group>
                        <Button className="btn-primary btn-sm" type="submit">
                            Submit Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CreatePostForm;
