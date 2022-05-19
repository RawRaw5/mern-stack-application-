import React, { useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

// Example POST method implementation:
async function postData(url = '', data = {}) {
    console.log(data)
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  
  


function CreatePost() {

    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const [author, setAuthor] = useState(null)


    const handleSubmit = event => {
        event.preventDefault()
        const postDetails = {
           title : title,
           body : body,
           author : author || "Anonymous" 
        }
        console.log(JSON.stringify(postDetails))
        postData('https://mernstack-application.herokuapp.com/posts/',  postDetails )
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
        
        // var myInput = document.getElementById('text-box').value
        // console.log("test", myInput)
        // alert(JSON.stringify(myInput))
        //this returns the input as JSON in an alert
    }

  return (
      <div>
          <Card style={{ width: '20rem'}}>
            <Card.Header as="h5">Create Post</Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Title"onChange={e => setTitle(e.target.value)} />
                    <input id='text-box' type='text' placeholder="What's on your mind?" onChange={e => setBody(e.target.value)}/>
                    <input type='text' placeholder='Name' onChange={e => setAuthor(e.target.value)}/>
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