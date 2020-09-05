import React, { useState, useEffect } from 'react';
import {Button, TextField, FormControl} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {username: 'Hiba', text: 'Laaaa abb gaema tsuwert mazal'},
    {username: 'Hiba', text: 'Kanbghiiiik ♥️'},
    {username: 'Hossam', text: 'Kanbghiiiik a hibaa bzzff 🔥♥️'},
  ]);
  const [username, setUsername] = useState('');


  useEffect(() => {
      // setUsername(prompt('Please enter your username 👨‍💻'))
      setUsername('Hossam')
  }, [])
 
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
     <h1>Hello Hossam 🚀</h1>
     <h3>Welcome {username} !</h3>
     <form>
        <FormControl>
          <TextField id="standard-basic" label='Your message 👌' variant="outlined" value={input} onChange={event => setInput(event.target.value)}/>&nbsp;&nbsp;
          <Button type="submit" onClick={sendMessage} disabled={!input} variant="contained" color="primary">
              Send Message
          </Button>
        </FormControl>  
     </form>
        
      {
        messages.map(message => (
            <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
