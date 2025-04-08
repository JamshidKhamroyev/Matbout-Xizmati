const {model, Schema} = require("mongoose")

const bibliografiyaSchema = new Schema({
    url: {type: String, required: true},
    text: {type: String, required: true}
}, {timestamps: true})

module.exports = model("Bibliografiya", bibliografiyaSchema)