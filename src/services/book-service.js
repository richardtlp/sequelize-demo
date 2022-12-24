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

module.exports = {
  getBooks,
}
