const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')
const userController = require('../app/controllers/userAuthController')
const authenticateUser = require('../app/middlewares/authenticate')
//const uploadController = require('../app/controllers/uploadController')

router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/:id', authenticateUser,notesController.show)
router.post('/notes', authenticateUser,notesController.create)
router.put('/notes/:id', authenticateUser, notesController.update)
router.delete('/notes/:id', authenticateUser,notesController.delete)

router.post('/notes/register', userController.register)
router.post('/notes/login', userController.login)
router.delete('/notes/logout', authenticateUser, userController.logout)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.post('/categories', authenticateUser, categoriesController.create)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser,categoriesController.delete)

// router.post('/upload',(req,res,next)=>{
//     console.log('in middleware')
//     next()
// } ,uploadController.upload )


module.exports = router