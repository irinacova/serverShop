'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
      static associate({ Super_Shop }) {
          this.hasMany(Super_Shop, {
              foreignKey: 'superId'
          });
      }
  }
  Shop.init(
      {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
          },
          shopNumber: {
              allowNull: false,
              type: DataTypes.INTEGER
          },
          street: {
              allowNull: false,
              type: DataTypes.STRING
          },
          houseNumber: {
              allowNull: false,
              type: DataTypes.STRING
          },
          director: {
              allowNull: false,
              type: DataTypes.STRING
          },
          createdAt: {
              allowNull: true,
              type: DataTypes.DATE,
              defaultValue: new Date()
          },
          updatedAt: {
              allowNull: true,
              type: DataTypes.DATE,
              defaultValue: new Date()
          }
      },
      {
          sequelize,
          modelName: 'Shop'
      }
  );
  return Shop;
};
