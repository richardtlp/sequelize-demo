const BookService = require('../../services/book-service')
const { getBooksHandler } = require('../book-controller')

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

describe('test getBooksHandler', () => {
  it('should return list of books', () => {
    const mockRequest = { params: {} }
    const mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    jest.spyOn(BookService, 'getBooks').mockReturnValue(mockBookList)

    getBooksHandler(mockRequest, mockResponse)

    expect(BookService.getBooks).toHaveBeenCalled()
    expect(mockResponse.status).toBeCalledWith(200)
    expect(mockResponse.json).toBeCalledWith(mockBookList)
  })
})
