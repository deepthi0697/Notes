const Category = require('../models/category')

module.exports.list = (req,res) => {
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
}

module.exports.show = (req,res) => {
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
}

module.exports.create = (req,res) => {
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
}

module.exports.update = (req,res) => {
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
}

module.exports.delete = (req, res) => {
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
}


