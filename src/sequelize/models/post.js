'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User,{
        foreignKey:"user_id",
        as:"users"
      })
      // define association here
    }
  }
  Post.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    post: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    status: {
      type: DataTypes.BOOLEAN,
    },
    user_id: {
      type: DataTypes.BOOLEAN,
      references:{model:"Users",key:"id"},
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};