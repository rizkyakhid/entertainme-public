const router = require('express').Router()
const SeriesController = require('../controllers/seriesController')

router.get('/', SeriesController.findAll)
router.post('/', SeriesController.add)
router.get('/:id', SeriesController.findOne)
router.put('/:id', SeriesController.update)
router.delete('/:id', SeriesController.delete)

module.exports = router