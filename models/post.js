'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  post.init({
    idPost: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    message: DataTypes.STRING,
    published_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'posts',
  });

  post.associate = function(models) {
    brand.belongsTo(models.item,{
      as:'users',
      foreignKey:'idUser'
    });
  };

  return post;
};