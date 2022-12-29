const model = require('../../db/models')
const createHttpError = require('http-errors')

const getBooks = async () => {
  return await model.Book.findAll({
    attributes: { exclude: ['author_id'] },
    include: 'author',
  })
}

const insertABook = async (book) => {
  const author = await model.Author.findOne({
    where: {
      name: book.authorName,
    },
  })
  if (author === null) {
    throw createHttpError(400, 'author not found')
  }
  const newBook = await model.Book.create({
    name: book.name,
    genre: book.genre,
  })
  return newBook.setAuthor(author)
}

module.exports = {
  getBooks,
  insertABook,
}
