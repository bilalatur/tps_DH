const multer = require('multer'); 
const path = require('path');

var storage = multer.diskStorage({
  destination: path.join(__dirname,'../public/images/'),
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    console.log(file);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    ext = ext.toLowerCase(); 

    if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return callback(new Error('La imagen de ser JPG, PNG, JPEG.'))
      }
    callback(null, true)
  }
}).single('image');

let uploadFile = {
  uploadFile: function (req,res,next) {
    upload(req, res, function(err){ 
      if(err) {
        console.log(err);
        return res.render("createProduct", {errors: errors});
      } else { 
          next(); 
        } 
    });
  }
}

module.exports = uploadFile;
