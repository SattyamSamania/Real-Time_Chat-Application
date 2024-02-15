import React, { useEffect, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

const ChatPage = ({ socket }) => {

  const [messages, setMessages]= useState([]);
  const [typingStatus, setTypingStatus] = useState('');

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);


  useEffect(()=> {
    socket.on('typingResponse', (data) => setTypingStatus(data))
  })
  return (

    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} typingStatus={typingStatus} />
        <ChatFooter socket={socket}/>
      </div>
    </div>
  );
};

export default ChatPage;