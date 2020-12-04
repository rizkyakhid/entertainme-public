const router = require('express').Router()
const movieRouter = require('./movies')
const seriesRouter = require('./series')

router.use('/movies', movieRouter)
router.use('/series', seriesRouter)

module.exports = router