'use strict';
const {
  Model
} = require('sequelize');
const {Post} = require("../../sequelize/models")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post,{foreignKey:"user_id",as:"posts"})
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull:true
    },
    education: {
      type: DataTypes.STRING,
      allowNull:true
    },
    dob: {
      type: DataTypes.DATE,
      allowNull:true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};