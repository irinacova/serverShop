'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Super_Shop extends Model {
  
    static associate({Shop,Supervizor}) {

  this.belongsTo(Shop, {
      foreignKey: 'shopId'
  });
  this.belongsTo(Supervizor, {
      foreignKey: 'superId'
  });
    }
  }
  Super_Shop.init(
      {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
          },
          superId: {
              allowNull: false,
              type: DataTypes.INTEGER,
              references: {
                  model: 'Supervizor',
                  key: 'id'
              },

              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
          },
          shopId: {
              allowNull: false,
              type: DataTypes.INTEGER,
              references: {
                  model: 'Shop',
                  key: 'id'
              },

              onDelete: 'CASCADE',
              onUpdate: 'CASCADE'
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
          modelName: 'Super_Shop'
      }
  );
  return Super_Shop;
};
