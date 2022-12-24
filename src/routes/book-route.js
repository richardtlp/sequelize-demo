const { Router } = require('express')
const { getBooksHandler } = require('../controllers/book-controller')

const router = Router()

router.get('/', getBooksHandler)

module.exports = {
  BookRouter: router,
}
