'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
up (queryInterface) {
  return queryInterface.bulkInsert('author', [
    { id: 1, name: 'Anita Bath' },
    { id: 2, name: 'Chris P. Bacon' },
    { id: 3, name: 'Cliff Hanger' }
  ])
},
down (queryInterface) {
  return queryInterface.bulkDelete('author', null, {});
}}

