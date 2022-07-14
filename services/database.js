const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/obidientdb"
exports.Connect = async() => {
    await mongoose.connect(uri, {
        useNewUrlParser: true
    }).then((connection) => {
        connect = connection
        console.log(`Database Status: ${connection.STATES.connected ? 'connected!!!' : 'failed!!!'}`)
    }).catch((error) => {
        console.log(error)
    })
}