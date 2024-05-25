'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Super_Shops', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        superId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Supervizors',
                key: 'id'
            },

            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        shopId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
                model: 'Shops',
                key: 'id'
            },

            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Super_Shops');
  }
};
