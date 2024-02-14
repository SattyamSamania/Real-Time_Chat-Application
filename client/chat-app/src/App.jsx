import React from 'react'
import socketIO from 'socket.io-client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ChatPage   from '../components/ChatPage';
import  Home  from '../components/Home';


const socket = socketIO.connect('http://localhost:4000');


const App = () => {
  return (

    <BrowserRouter>
    <div>

      <Routes>
      <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>

      </Routes>
    </div>
    
    </BrowserRouter>
  )
}

export default App