import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Controls from "./Controls";
import "./display.css";

const DisplayPosts = () => {
    const [data, setData] = useState([]);
    const pullData = () => {
        axios("https://mernstack-application.herokuapp.com/posts")
        .then((response) => {
            setData(response.data);
            // console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    }
    useEffect(() => {
      pullData() 
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                "https://mernstack-application.herokuapp.com/posts/,",
                { id }
            );
            console.log("Item successfully deleted.");
        } catch (error) {
            alert(error);
            console.log(error.message);
        }
    };

    // GET request for remote image in node.js
    axios({
        method: "delete",
        url: `https://mernstack-application.herokuapp.com/posts/`,
        responseType: "stream",
    }).then(function(response) {
        // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    });

    const handleClick = (e) => {
        e.preventDefault();
        console.log('cars was clicked')
        console.log()
    }

    return (
        <Container fluid className="p-3 my-3">
            <Row xs={1} md={1} className="g-4">
                {data.map((da) => (
                    <Col key={da._id} className="card-item " onClick={handleClick}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="mb-2">
                                    {da.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-3">
                                    {da.author}
                                </Card.Subtitle>
                                <Card.Text>{da.body}</Card.Text>
                                <Controls postId={da._id} pullFunction={pullData}/>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DisplayPosts;
