const express = require('express')
const server = express()
var path = require('path')
var axios = require('axios')

//connect to mongoDb server
require("./services/database").Connect()


server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.set("view engine", "ejs")
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.static(path.join(__dirname, 'client', 'dist')))



// Version 1 Router (API) End Points
const v1Router = require('./routers/v1')
server.use('/api/v1', v1Router)

// Version 2 Router (API) End Points
const v2Router = require('./routers/v2')
server.use('/api/v2', v2Router)

// Every other Routes not included in V1 or V2
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})