'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Disease extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Disease.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Disease',
  });
  return User_Disease;
};