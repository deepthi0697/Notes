const mongoose = require('mongoose')

//db configuration
const setupDb = () => {
    mongoose.connect('mongodb+srv://deepthi:*********@cluster0-7uxoi.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = setupDb
