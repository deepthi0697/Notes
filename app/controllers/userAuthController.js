const {User} = require('../models/UserAuthentication')
const bcryptjs = require('bcryptjs')

module.exports.register = (req,res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.login = (req,res) => {
    const body = req.body
    User.findByCredentials(body.email,  body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token)
            res.send(token)
        })
        .catch((err)  => {
            res.json(err)
        })
}


module.exports.logout = (req, res) => {
    const {user, token} = req
    User.findByIdAndUpdate(user._id, { $pull: {tokens: {token: token}}})
    .then(function(){
        res.send({notice: "successfully logged out"})
    })
    .catch((err) => {
        res.json(err)
    })
}