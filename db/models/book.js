'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Author, {
        foreignKey: 'author_id',
        as: 'author',
      })
    }
  }

  Book.init(
    {
      name: DataTypes.STRING,
      genre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books',
      underscored: true,
    },
  )
  return Book
}
