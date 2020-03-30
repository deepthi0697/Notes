const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3033
const setupDb = require('./config/database')
const routes = require('./config/routes')
const multer = require('multer')
const path = require('path')

//express to take json data
app.use(cors())
app.use(express.json())
app.use('/', routes)

//connect to db
setupDb()

//Public folder
app.use(express.static('./public'))

//storage 
// const storage = multer.diskStorage({
//     destination: './app/public/uploads',
//     filename: function(req, file, cb){
//         cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
//     }
// })


// //init upload
// const upload = multer({
//     storage: storage,
//     limits: {fileSize: 10000},
//     fileFilter: function(req, file, cb){
//         checkFileType(file, cb)
//     }
// })

// function checkFileType(file, cb){
//     const filetypes = /jpeg|jpg|png|gif/
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//     const mimetype = filetypes.test(file.mimetype)
//     if(mimetype && extname){
//         return cb(null, true)
//     } else {
//         cb('Error: Images only')
//       }
// }

// app.post('/upload', (req, res) => {
//     upload(req, res, (err) => {
//       if(err){
//         res.render('index', {
//           msg: err
//         })
//       } else{
//         if(req.file == 'undefined'){
//           res.render('index', {
//             msg: 'Error: No file Selected'
//           })
//         } else {
//           res.render('index', {
//             msg: "File uploaded",
//             file: `uploads/${req.file.filename}`
//           })
//         }
//       }
//     })
//   })
  

//request handler
//app.httpMethod(url, callback)
app.get('/', (req,res) => {
    res.json({text: 'welcome to the website'})
})


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
