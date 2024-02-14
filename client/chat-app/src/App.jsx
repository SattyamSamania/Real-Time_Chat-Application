import React from 'react'
import socketIO from 'socket.io-client'


const socket = socketIO.connect('http://localhost:4000');


const App = () => {
  return (
    <div>App</div>
  )
}

export default App