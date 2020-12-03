const router = require('express').Router()
const EntertainMeController = require('../controllers/entertainMeController')
const movieRouter = require('./movies')
const seriesRouter = require('./series')

router.get('/', EntertainMeController.getAll)
router.use('/movies', movieRouter)
router.use('/series', seriesRouter)

module.exports = router