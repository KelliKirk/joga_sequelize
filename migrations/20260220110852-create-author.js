'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
up (queryInterface, Sequelize) {
  return Promise.all([
    queryInterface.createTable('author', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  ])
},
down (queryInterface) {
  return Promise.all([
    queryInterface.dropTable('author')
  ])
}
};
