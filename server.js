const express = require('express')
const server = express()
var path = require('path')
var axios = require('axios')
const cors = require('cors')
const helmet = require('helmet')

//connect to mongoDb server
require("./services/database").Connect()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))

server.set("view engine", "ejs")
// in case we have need for statics
server.use(express.static(path.join(__dirname, 'public')))

// Server Security is
// important to us
server.use(cors())
server.use(
    helmet.frameguard(),
    helmet.hsts(),
    helmet.noSniff(),
    helmet.dnsPrefetchControl(),
    helmet.ieNoOpen(),
    helmet.referrerPolicy(),
    helmet.xssFilter()
)
app.use(compression());


// Version 1 Router (API) End Points
const v1Router = require('./routers/v1')
server.use('/api/v1', v1Router)

// Version 2 Router (API) End Points
const v2Router = require('./routers/v2')
server.use('/api/v2', v2Router)

// Every other Routes not included in V1 or V2
server.get('/', (req, res) => {
    res.status(200).json({ app: 'NUPO Server', domain: '', status: true })
})

const port = process.env.PORT || 4000
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${port}`)
})