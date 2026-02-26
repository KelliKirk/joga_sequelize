'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.bulkInsert('articletags', [{
      article_id: 12,
      tag_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 12,
      tag_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 12,
      tag_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 13,
      tag_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 13,
      tag_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 14,
      tag_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),
    queryInterface.bulkInsert('articletags', [{
      article_id: 14,
      tag_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    } ] ),

   ]  )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('articletags')
  }
};
