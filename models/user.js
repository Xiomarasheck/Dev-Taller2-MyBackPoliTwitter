'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    userName: DataTypes.STRING,
    creation_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'user',
  });

  user.associate = function(models) {
    brand.hasMany(models.item,{
      as:'posts',
      foreignKey:'idUser'
    });
  };


  return user;
};