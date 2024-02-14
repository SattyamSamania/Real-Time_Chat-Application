const express = require('express')

const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());


// TO Create Real-time Connection between Client and Server 

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
});

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});


app.get('/api', (req, res)=> {
    res.json({message: 'This is Server Running' })
})

http.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})