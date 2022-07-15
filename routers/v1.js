const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({ data: [], status: 1 })
    next()
})


module.exports = router