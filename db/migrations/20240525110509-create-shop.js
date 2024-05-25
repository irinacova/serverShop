'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shops', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        shopNumber: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        street: {
            allowNull: false,
            type: Sequelize.STRING
        },
        houseNumber: {
            allowNull: false,
            type: Sequelize.STRING
        },
        director: {
            allowNull: false,
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: new Date()
        }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shops');
  }
};
