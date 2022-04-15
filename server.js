const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const users = require("./api/users")

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/api/users', (req, res) => {
    // throw new Error("whoops!")
    try{
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message: "yikes! not sure what went wrong >.<"})
    }
})

server.post('/api/register', (req, res) => {
    users.push(req.body)
    try{
        res.status(200).json(users[users.length - 1])
    }catch(err){
        res.status(500).json({message: "yikes! not sure what went wrong >.<"})
    }
})

server.post('/api/login', (req, res) => {
    if(req.body){
        try{
            res.status(200).json({message: "Welcome, I don't have to make you disappear, yay!"})
        }catch(err){
            res.status(500).json({message: "yikes! not sure what went wrong >.<"})
        }
    }
})

module.exports = server;