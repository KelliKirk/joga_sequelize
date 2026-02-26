'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
 return queryInterface.bulkInsert('tag',[
   { id: 1, name: 'yogapractice', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 2, name: 'yogainspiration', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 3, name: 'wellness', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 4, name: 'nature', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 5, name: 'spiritual', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 6, name: 'sport', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') },
    { id: 7, name: 'yogateacher', createdAt: new Date('2022-02-16 13:32:01'), updatedAt: new Date('2022-02-16 13:32:01') }
  ])
  },

  down (queryInterface) {
    return queryInterface.bulkDelete('tag', null, {})  
  }
};
