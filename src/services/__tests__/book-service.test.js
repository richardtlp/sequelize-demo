const { getBooks, insertABook } = require('../book-service')
const model = require('../../../db/models')

describe('test getBook', () => {
  const mockBookList = [
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

  it('should return list of books', async () => {
    jest.spyOn(model.Book, 'findAll').mockResolvedValue(mockBookList)
    const books = await getBooks()
    expect(books).toStrictEqual(mockBookList)
  })
})

describe('test insertABook', () => {
  const mockAuthor = {
    id: 1,
    name: 'J K Rowling',
    createdAt: new Date(2023, 1, 1),
    updatedAt: new Date(2023, 1, 1),
  }

  const newBook = {
    name: 'Kane and Abel',
    authorName: 'J K Rowling',
    genre: 'Fiction',
  }

  it('should return new book after successfully insertion', async () => {
    jest.spyOn(model.Author, 'findOne').mockResolvedValue(mockAuthor)
    const mockBook = {
      id: 1,
      name: 'Kane and Abel',
      authorId: mockAuthor.id,
      genre: 'Fiction',
      createdAt: new Date(2023, 1, 1),
      updatedAt: new Date(2023, 1, 1),
    }
    const mockResolvedCreatedBook = {
      ...mockBook,
      setAuthor: () => mockBook,
    }
    jest.spyOn(model.Book, 'create').mockResolvedValue(mockResolvedCreatedBook)

    const got = await insertABook(newBook)
    expect(got).toBe(mockBook)
    expect(model.Book.create).toBeCalledWith({
      name: 'Kane and Abel',
      genre: 'Fiction',
    })
  })

  it('should throw error if author not found', async () => {
    jest.spyOn(model.Author, 'findOne').mockResolvedValue(null)
    await expect(insertABook(newBook)).rejects.toThrow()
  })
})
