'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
up (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.renameTable('Articles', 'article'),
    queryInterface.changeColumn('article', 'id',{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    } ),
    queryInterface.changeColumn('article', 'name',{
      type: Sequelize.STRING,
      allowNull: false
    } ),
    queryInterface.changeColumn('article', 'slug',{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    } ),
    queryInterface.changeColumn('article', 'image',{
      type: Sequelize.STRING,
      allowNull: false,
    } ),
    queryInterface.changeColumn('article', 'body',{
      type: Sequelize.TEXT,
      allowNull: false,
    } ),
    queryInterface.changeColumn('article', 'published',{
      type: Sequelize.DATE,
      allowNull: false,
    } ),
    queryInterface.changeColumn('article', 'author_id',{
      type: Sequelize.INTEGER
    } )
   ] )
  },

down (queryInterface) {
    return Promise.all([
      queryInterface.dropTable('article')
    ] )
  }
};
