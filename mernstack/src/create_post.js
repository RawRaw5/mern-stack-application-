import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




function CreatePost() {
  return (
      <div>
          <Card style={{ width: '20rem'}}>
            <Card.Header as="h5">Create Post</Card.Header>
            <Card.Body>
                <Card.Text>
                <input type='text'/>
                </Card.Text>
                <Button variant="primary">Post</Button>
            </Card.Body>
            </Card>
      </div>
  )
}

export default CreatePost;

