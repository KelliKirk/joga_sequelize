'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articletag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.belongsTo(models.Article, { foreignKey: 'article_id' })
       this.belongsTo(models.Tag, { foreignKey: 'tag_id' })
    }
  }
  articletag.init({
    article_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'articletag',
    tableName: 'articletags'
  });
  return articletag;
};