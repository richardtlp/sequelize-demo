const { getBooks } = require('../book-service')

const dummyBookList = [
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

describe('test getBook', () => {
  it('should return list of books', () => {
    const books = getBooks()
    expect(books).toStrictEqual(dummyBookList)
  })
})
