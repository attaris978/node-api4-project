const express = require('express')

const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
    res.status(200).json([])
});
server.post('/api/register', (req, res) => {
    const {username, password} = req.body;
    res.status(201).json({username, password})
})
server.post('/api/login', (req, res) => {
    const {username} = req.body;
    res.status(200).json({message: `Thanks for logging in, ${username}!`})
})

module.exports = server;