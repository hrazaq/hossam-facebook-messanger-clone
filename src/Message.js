import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import './Message.css';

function Message({message, username}) {
    const isUser = username === message.username;
    return (
       
            
                <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                    <CardContent>
                        <Typography color="white" variant="h5" component="h2">
                        <p><b>{message.username}</b> :  {message.text}</p>
                        </Typography>
                    </CardContent>
                </Card>
         
   
    )
}

export default Message
