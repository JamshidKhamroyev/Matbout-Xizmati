const {model, Schema} = require("mongoose")

const makonSchema = new Schema({
    text: {type: String, required: true},
    image: {type: String, required: true}
}, {timestamps: true})

module.exports = model("Makon", makonSchema)