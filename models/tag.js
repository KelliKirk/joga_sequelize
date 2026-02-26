'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Article, { through: 'articletags', foreignKey: 'tag_id' })
    }
  }
  Tag.init({
    name:{ 
    type: DataTypes.STRING,
    allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tag'
  });
  return Tag;
};