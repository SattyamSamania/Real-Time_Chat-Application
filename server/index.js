const express = require('express')

const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res)=> {
    res.json({message: 'This is Server Running' })
})

http.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})