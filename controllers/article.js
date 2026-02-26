const sequelize = require('../config/database')
const Sequelize = require('sequelize')

// read model data for table representation
const Article = require('../models/article')(sequelize, Sequelize.DataTypes)
const Author = require('../models/author')(sequelize, Sequelize.DataTypes)
const Tag = require('../models/tag')(sequelize, Sequelize.DataTypes)

// define associations
Article.belongsTo(Author, { foreignKey: { name: 'AuthorId', field: 'author_id' } })
Tag.belongsToMany(Article, { through: 'articletags', foreignKey: 'tag_id' })
Article.belongsToMany(Tag, { through: 'articletags', foreignKey: 'article_id' })

// get all data from table
const getAllArticles = (req, res) => {
    Article.findAll()
    .then(articles => {
        return res.status(200).json({articles})
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

// show article by slug
const getArticleBySlug = (req, res) => {
    Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [
            { model: Author },
            { model: Tag }
        ]
    })
    .then(article => {
        return res.status(200).json({article})
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

// export controller functions
module.exports = { getAllArticles, getArticleBySlug } 