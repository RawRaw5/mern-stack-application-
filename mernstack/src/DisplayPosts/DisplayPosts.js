import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Controls from "./Controls";

const DisplayPosts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://mernstack-application.herokuapp.com/posts")
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Container fluid className="p-3 my-3">
            <Row xs={1} md={1} className="g-4">
                {data.map((da) => (
                    <Col key={da._id}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="mb-1">
                                    {da.title}
                                </Card.Title>
                                <Card.Subtitle className="mb-3">
                                    {da.author}
                                </Card.Subtitle>
                                <Card.Text>{da.body}</Card.Text>
                                <Controls />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DisplayPosts;
