const mongoose = require('mongoose')
const Schema = mongoose.Schema

//schema for category
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Category/*(variable name)*/  = mongoose.model('Category' /* (model name)*/, categorySchema)

module.exports = Category