const express = require('express')

const app = express();
const PORT = process.env.PORT || 4000;

const http = require('http').Server(app);
const cors = require('cors');



// TO Create Real-time Connection between Client and Server 

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

app.use(cors());


let users = [];

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

// CHeck if the user is typing 
socket.on('typing', (data)=> socket.brodcast.emit('typingResponse', data))

  //Listens when a new user joins the server
  socket.on('newUser', (data) => {
    //Adds the new user to the list of users
    users.push(data);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    //Updates the list of users when a user disconnects from the server
    users = users.filter((user) => user.socketID !== socket.id);
    // console.log(users);
    //Sends the list of users to the client
    socketIO.emit('newUserResponse', users);
    socket.disconnect();
  });
});

app.get('/api', (req, res)=> {
    res.json({message: 'This is Server Running' })
})

http.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})