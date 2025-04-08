const {model, Schema} = require("mongoose")

const announcSchema = new Schema({
    url: {type: String, required: true},
    image: {type: String, required: true}
}, {timestamps: true})

module.exports = model("Gazeta", announcSchema)