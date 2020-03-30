const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category' //here we are giving reference to the model name
    },
    image: {
        type: String
    }
}) 

const Note = mongoose.model('Note', noteSchema)

module.exports = Note

