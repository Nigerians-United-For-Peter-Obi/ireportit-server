const express = require('express')
const router = express.Router()

//conrollers
const authControllers = require('../controllers/authController');

router.post('/register', authControllers.registerController);


router.get('/', (req, res, next) => {
    res.status(200).json({ data: [], status: 1 })
    next()
})


module.exports = router