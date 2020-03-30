const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: './app/public/uploads',
    filename: function(req, file, cb){
        cb(null, file.filename + '-' + Date.now() + path.extname(file.originalname))
    }
})

//init upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 10000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
})

function checkFileType(file, cb){
        const filetypes = /jpeg|jpg|png|gif/
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = filetypes.test(file.mimetype)
        if(mimetype && extname){
            return cb(null, true)
        } else {
            cb('Error: Images only')
          }
    }


module.exports.upload = (req, res, err) => {
    console.log('controller')
    
    if(err){
        res.render('index', {
          msg: err
        })
      } else{
        if(req.body == 'undefined'){
          res.render('index', {
            msg: 'Error: No file Selected'
          })
        } else {
          res.render('index', {
            msg: "File uploaded",
            file: `uploads/${req.body.filename}`
          })
        }
        //res.send(req.file)
      }
}

