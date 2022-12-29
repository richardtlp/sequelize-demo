const { Router } = require('express')
const { getBooksHandler, insertABookHandler } = require('../controllers/book-controller')
const asyncHandler = require('express-async-handler')

const router = Router()

router.get('/', getBooksHandler)
router.post('/', asyncHandler(insertABookHandler))

module.exports = {
  BookRouter: router,
}
