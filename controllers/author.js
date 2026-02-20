const sequelize = require('../config/database');
const Sequelize = require('sequelize');
const Author = require('../models/author')(sequelize, Sequelize.DataTypes);
const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

// Seadista assotsiatsionid
Article.belongsTo(Author, { foreignKey: { name: 'AuthorId', field: 'author_id' } });
Author.hasMany(Article, { foreignKey: { name: 'AuthorId', field: 'author_id' } });

// Hangi autor koos tema artiklitega
const getAuthorById = (req, res) => {
    const authorId = req.params.id;
    
    Author.findByPk(authorId, {
        include: [{
            model: Article,
            as: 'Articles' // Sequelize genereerib automaatselt aliase
        }]
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({ error: 'Autorit ei leitud' });
        }
        
        console.log('Author:', author);
        console.log('Articles:', author.Articles);
        
        return res.status(200).json({ author });
    })
    .catch(error => {
        console.error('Error:', error);
        return res.status(500).send(error.message);
    });
};

module.exports = { getAuthorById };