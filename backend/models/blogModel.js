const {model, Schema} = require("mongoose")

const blogSchema = new Schema({
    text: {type: String, required: true},
    image: [
        {type: String}
    ],
    video: {type: String}
}, {timestamps: true})

module.exports = model("Blog", blogSchema)