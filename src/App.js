import React, { useState, useEffect } from 'react';
import {Input, FormControl, IconButton} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      // get all from firebase
      //looping on documents;[doc.data] is an object of {username , message}
      db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>{
        setMessages(snapshot.docs.map(doc => ({id: doc.id ,message: doc.data()})))
      });
  }, [])

  useEffect(() => {
      setUsername(prompt('Please enter your username 👨‍💻'))
  }, [])
 
  const sendMessage = (event) => {
    event.preventDefault();
    // send to firebase
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
     <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messange_logo"></img>
     <h1>Hello Clever Hossam 
       <span role="img" aria-label="rocket">🚀 !</span>
     </h1>
     <h3>Welcome {username} !</h3>

     <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input"  placeholder='Enter e message...' value={input} onChange={event => setInput(event.target.value)}/>&nbsp;&nbsp;
          <IconButton className="app__iconButton" type="submit" onClick={sendMessage} disabled={!input} variant="contained" color="primary">
            <SendIcon />
          </IconButton>
        </FormControl>  
     </form>
     <FlipMove>
        {
          messages.map(({id, message}) => (
              <Message key={id} username={username} message={message}/>
          ))
        }
     </FlipMove>
      
    </div>
  );
}

export default App;
