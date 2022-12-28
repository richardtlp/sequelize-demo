/* eslint-disable no-unused-vars */
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('authors', [
      {
        name: 'J K Rowling',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Nguyen Nhat Anh',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('authors', null, {})
  },
}
