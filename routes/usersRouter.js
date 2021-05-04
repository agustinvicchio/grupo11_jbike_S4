let express = require('express');
const usersController = require ('../Controller/usersController');
let router = express.Router();



router.get('/login' , usersController.login);
router.get('/register' , usersController.register);



module.exports = router