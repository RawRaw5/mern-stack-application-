import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




function CreatePost() {

    const handleSubmit = event => {
        event.preventDefault()
        alert('You have created a post')
    }


  return (
      <div>
          <Card style={{ width: '20rem'}}>
            <Card.Header as="h5">Create Post</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                <input id='text-box' type='text' placeholder="What's on your mind?"/>
                <Card.Text>-Anonymous</Card.Text>
                </form>
                <Button onClick={handleSubmit} variant="primary">Post</Button>
            </Card.Body>
            </Card>
            
      </div>
  )
}

export default CreatePost;

