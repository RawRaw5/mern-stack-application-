import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




function CreatePost() {

    const handleSubmit = event => {
        event.preventDefault()
        var myInput = document.getElementById('text-box').value
        console.log("test", myInput)
        alert(JSON.stringify(myInput))
        //this returns the input as JSON in an alert
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
                <form method= "POST" action= {`/?_method=POST`}>
                    <Button onClick={handleSubmit} variant="primary">Post</Button>
                </form>
            </Card.Body>
            </Card>
            
      </div>
  )
}

export default CreatePost;

