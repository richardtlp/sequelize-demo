const model = require('../../db/models')
const createHttpError = require('http-errors')

const getBooks = () => {
  return [
    {
      id: 1,
      name: 'Harry Porter',
      author: {
        id: 1,
        name: 'J K Rowling',
      },
      genre: 'Fiction',
    },
    {
      id: 2,
      name: 'Dreamy Eyes',
      author: {
        id: 2,
        name: 'Nguyen Nhat Anh',
      },
      genre: 'Fiction',
    },
  ]
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
