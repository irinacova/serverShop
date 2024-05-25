'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
  
     await queryInterface.bulkInsert(
         'Supervizors',
         [
             {
                 name: 'Olga',
                 surname: 'Petrova',
                 email: '32323@ghjjj',
                 joptitle: 'Пекарня'
             },
             {
                 name: 'Denis',
                 surname: 'Ivanov',
                 email: '3333@ghjjj',
                 joptitle: 'Кухня'
             },
             {
                 name: 'Svetlana',
                 surname: 'Volkova',
                 email: '5555@ghjjj',
                 joptitle: 'Цветы'
             }
         ],
         {}
     );
 
  },

  async down (queryInterface, Sequelize) {
    
  }
};
