'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

 await queryInterface.bulkInsert(
     'Shops',
     [
         {
             shopNumber: 108,
             street: 'ul.Kaikova',
             houseNumber: 12,
             director: 'Petrova O.V.'
         },
         {
             shopNumber: 109,
             street: 'ul.MarshalaKatukova',
             houseNumber: 8,
             director: 'Ivanova K.L.'
         },
         {
             shopNumber: 110,
             street: 'ul.LizaChaikina',
             houseNumber: 2,
             director: 'Zaicev V.V.'
         }
     ],
     {}
 );
   
  },

  async down (queryInterface, Sequelize) {
   
  }
};
