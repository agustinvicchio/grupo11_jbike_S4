let express = require('express');
const productsController = require('../Controller/productsController');
let router = express.Router();
const multer = require('multer');
const path = require ('path');

//configuracion de multer

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,path.join(__dirname, '../public/image/productsimages'))
    },
    filename: (req,file,callback) => {
        const newFileName = 'producto-' + Date.now() + path.extname(file.originalname);
        callback(null,newFileName);
    }
});

let fileUpload = multer({storage});

//GETS
router.get('/product' , productsController.product);
router.get('/carrito', productsController.carrito);
router.get('/crear' , productsController.crear);



//POST

router.post('/crear' , fileUpload.single('imagen'),productsController.guardar);

module.exports = router;