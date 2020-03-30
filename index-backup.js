const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3033

//express to take json data
app.use(express.json())

//db configuration
mongoose.connect('mongodb+srv://deepthi:shaz7022@cluster0-7uxoi.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })


//creating a schema
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
    }
}) 

//schema for category
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})


//creating a note model
const Note = mongoose.model('Note', noteSchema)

//model for Category
const Category/*(variable name)*/  = mongoose.model('Category' /* (model name)*/, categorySchema)


//request handler
//app.httpMethod(url, callback)
app.get('/', (req,res) => {
    res.json({text: 'welcome to the website'})
})

//GET localhost3033/notes
app.get('/notes', (req,res) => {
    Note.find().populate('category'/* here we're reffering to the feild name*/) // find is always a static method wherever we use it, because we will always use find in an array. Populate doesnt work when we're saving, it works only while finding the data
        .then((notes) => {
            if(notes){
                res.json(notes)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

//POST localhost3033/notes
app.post('/notes', (req,res) => {
    const body = req.body //{title,body}
    const note = new Note(body) // note.title = body.title, note.body = body.body
    note.save()
        .then((note) => {
            if(note){
                res.json(note)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})


//GET localhost:3033/notes/:id
app.get('/notes/:id', (req,res) => {
    const id = req.params.id
    Note.findById(id).populate('category', ['name']) //2nd argumet is feild that you want
        .then((note) => {
            if(note){
                res.json(note)
            }else {
                res.json({})
            }
        })
        .catch(err => {
            req.json(err)
        })
})

//PUT localhost:3033/notes/:id
app.put('/notes/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, body, {new: true, runValidators: true}) // in mongoose validations will only run on static methods that is ehn you're trying to save the data. nut here no validations will be run on instance method hence we use runValidators
        .then((note) => {
            if(note){
                res.json(note)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})


//DELETE localhost:3033/notes/:id
app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then((note) => {
            if(note){
                res.json(note)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
})

//////////////////////CATEGORIES///////////////////

app.get('/categories', (req, res) => {
    Category.find()
        .then((catg) =>{
            if(catg){
                res.json(catg)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.post('/categories' , (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((catg) => {
            if(catg){
                res.json(catg)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.get('/categories/:id', (req,res) => {
    const id = req.params.id

    Promise.all([Category.findById(id), Note.find({category: id}).populate('category')])
        .then((values) => {
            const [category, notes] = values
            //res.json({category, notes}) //if we want only 1 property to be present in the object i.e., notes inside category.
            
            const newCategory = category.toObject()// we're converting category to regular js object
            newCategory.notes = notes
            res.json(newCategory) 
        })
        .catch((err) => {
            res.json(err)
        })
    // Category.findById(id)
    //     .then((catg) => {
    //         if(catg){
    //            Note.find({category: id})  here while nesting, we're compromising on the speed of execution
    //                 .then((notes) => {
    //                     res.json({catg,notes})
    //                 }).catch((err) => {
    //                     res.json(err)
    //                 })
    //         } else {
    //             res.json({})
    //         }
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
})

app.put('/categories/:id', (req,res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id,body, {new: true, runValidators: true})
        .then((catg) => {
            if(catg){
                res.json(catg)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.delete('/categories/:id', (req,res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
        .then((catg) => {
            if(catg){
                res.json(catg)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
