const express = require('express')
const router = express.Router()

//conrollers
const authControllers = require('../controllers/authController');

router.post('/register', authControllers.registerController);
router.post('/login', authControllers.loginController);


module.exports = router;