const Employee = require('../models/employee')

module.exports.list = (req,res) => {
    Employee.find()
        .then((employee) =>{
            if(employee){
                res.json(employee)
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
    Employee.findById(id)
        .then((value) => {
            res.json(value) 
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
        const employee = new Employee(body)
        employee.save()
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
        Employee.findByIdAndUpdate(id,body, {new: true, runValidators: true})
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
    Employee.findByIdAndDelete(id)
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


