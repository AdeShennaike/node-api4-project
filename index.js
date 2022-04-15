require('dotenv').config()

const server = require('./server')

const Port = process.env.PORT || 9000

server.listen(Port, () => {
    console.log(`\n**Server running on localhost:${Port}**\n`)
})