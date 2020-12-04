const router = require('express').Router()
const MovieController = require('../controllers/movieController')

router.get('/', MovieController.findAll)
router.post('/', MovieController.add)
router.get('/:id', MovieController.findOne)
router.put('/:id', MovieController.update)
router.delete('/:id', MovieController.delete)

module.exports = router