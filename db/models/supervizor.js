'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supervizor extends Model {
  
   
      static associate({Super_Shop}) {
  this.hasMany(Super_Shop, {
      foreignKey: 'supervizorId'
  });

    }
  }
   
  Supervizor.init(
      {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
          },
          name: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          surname: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          email: {
              allowNull: false,
              type: DataTypes.TEXT
          },
          joptitle: {
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
          modelName: 'Supervizor'
      }
  );
  return Supervizor;
};
