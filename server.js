const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/api/user', (req, res) => {
    
    res.status(200).json()
})

server.post('/api/register', (req, res) => {})
server.post('/api/login', (req, res) => {})

module.exports = server;