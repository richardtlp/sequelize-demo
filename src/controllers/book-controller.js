const BookService = require('../services/book-service')

const getBooksHandler = (_, res) => {
  const books = BookService.getBooks()
  res.status(200).json(books)
}

module.exports = {
  getBooksHandler,
}
