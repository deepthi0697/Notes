const Note = require('../models/note')
const express = require('express')
const app = express()

module.exports.list = (req,res) => {
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
}

module.exports.create = (req,res) => {
    const body = req.body //{title,body}
    const note = new Note(body)
     // note.title = body.title, note.body = body.body
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
}

module.exports.show = (req,res) => {
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
}

module.exports.update = (req,res) => {
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
}

module.exports.delete = (req,res) => {
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
}

