const BookService = require('../services/book-service')

const getBooksHandler = (_, res) => {
  const books = BookService.getBooks()
  res.status(200).json(books)
}

const insertABookHandler = async (req, res) => {
  const book = await BookService.insertABook(req.body)
  res.status(200).json(book)
}

module.exports = {
  getBooksHandler,
  insertABookHandler,
}
