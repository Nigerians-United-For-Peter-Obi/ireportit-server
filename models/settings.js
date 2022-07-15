const mongoose = require('mongoose')
const settingSchema = new mongoose.Schema({
    app: String,
    appname: String,
    app_title: String,
    appid: Number,
    version: String,
    debug: Boolean
})
module.exports = new mongoose.model("Settings", settingSchema)