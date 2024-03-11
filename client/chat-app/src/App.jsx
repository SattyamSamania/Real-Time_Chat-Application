import React from 'react'
import socketIO from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from '../components/ChatPage';
import  Home  from '../components/Home';


 const socket = socketIO.connect('https://real-time-chat-application-x4ba.onrender.com/');


const App = () => {
  return (

    <BrowserRouter>
    <div>

      <Routes>
      <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />}  />
 
      </Routes>
    </div>
    
    </BrowserRouter>
  )
}

export default App