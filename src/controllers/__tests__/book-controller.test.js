const BookService = require('../../services/book-service')
const { getBooksHandler, insertABookHandler } = require('../book-controller')
const createHttpError = require('http-errors')

describe('test getBooksHandler', () => {
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
    const mockRequest = { params: {} }
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    jest.spyOn(BookService, 'getBooks').mockReturnValue(mockBookList)

    await getBooksHandler(mockRequest, mockResponse)

    expect(BookService.getBooks).toHaveBeenCalled()
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(mockBookList)
  })
})

describe('test insertABookHandler', () => {
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

  it('should return new book after successful insertion', async () => {
    const mockRequest = { body: newBook }
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    const mockBook = {
      id: 1,
      name: 'Kane and Abel',
      authorId: mockAuthor.id,
      genre: 'Fiction',
      createdAt: new Date(2023, 1, 1),
      updatedAt: new Date(2023, 1, 1),
    }
    jest.spyOn(BookService, 'insertABook').mockResolvedValue(mockBook)

    await insertABookHandler(mockRequest, mockResponse)

    expect(BookService.insertABook).toBeCalledWith(newBook)
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(mockBook)
  })

  it('should throw error if author does not exist', async () => {
    const mockRequest = { body: newBook }
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    jest.spyOn(BookService, 'insertABook').mockImplementation(() => {
      throw createHttpError(400, 'author not found')
    })
    await expect(insertABookHandler(mockRequest, mockResponse)).rejects.toThrow()
  })
})
