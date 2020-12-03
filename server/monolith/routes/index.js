const router = require('express').Router()
const movieRouter = require('./movies')

router.use('/movies', movieRouter)

module.exports = router