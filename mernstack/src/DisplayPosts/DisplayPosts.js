import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const DisplayPosts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://mernstack-application.herokuapp.com/posts")
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Container fluid className='p-3 my-3'>
            <Row xs={1} md={1} className="g-4">
                    {data.map((da) => (
                        <Col key={da._id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='mb-1'>
                                        {da.title}
                                    </Card.Title>
                                    <Card.Subtitle className='mb-3'>
                                        {da.author}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {da.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
};

// {Array.from({ length: 8 }).map((_, idx) => (
//     <Col key={idx}>
//         <Card>
//             {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
//             <Card.Body>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                     This is a longer card with supporting text
//                     below as a natural lead-in to additional
//                     content. This content is a little bit
//                     longer.
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     </Col>
// ))}

export default DisplayPosts;
