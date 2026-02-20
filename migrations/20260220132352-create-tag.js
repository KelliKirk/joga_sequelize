'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
up(queryInterface, Sequelize) {
    return queryInterface.createTable('tag', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down(queryInterface, Sequelize) {
    return Promise.all([queryInterface.dropTable('tag')] ) 
  }
};