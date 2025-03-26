const {model, Schema} = require("mongoose")

const announcSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    image: [
        {type: String}
    ]
}, {timestamps: true})

module.exports = model("E'lon", announcSchema)