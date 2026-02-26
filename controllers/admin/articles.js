// get connection to database ORM object
const sequelize = require('../../config/database')
const Sequelize = require('sequelize')

// read models data for table representation
const models = require('../../models')

// create new article into data table
const createArticle = (req, res) => {
    // get form data
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    // create new article by Article model
    const newArticle = models.Article.create({
        // add values for NOT NULL fields
        // left - data table fields
        // right - values from form
        name: name,
        slug: slug,
        image: image,
        body: body,
        // publish date generate as now()
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({message: 'New article is added.'} )
    } )
    .catch(error => {
        return res.status(500).send(error.message)
    } )
} 

const updateArticle = (req, res) => {
    const id = req.params.id

    if (req.method === 'GET') {
        models.Article.findOne({
            where: { id: id }
        })
        .then(article => {
            models.Author.findAll()
            .then(authors => {
                return res.status(200).json({ article, authors })
            })
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })

    } else if (req.method === 'POST' && req.body._method === 'DELETE') {
        models.Article.findOne({ where: { id: id } })
        .then(article => {
            return article.destroy()
        })
        .then(() => {
            return res.status(200).json({ message: 'Article deleted.' })
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })

    } else if (req.method === 'POST') {
        models.Article.findOne({ where: { id: id } })
        .then(article => {
            return article.update({
                name: req.body.name,
                slug: req.body.slug,
                image: req.body.image,
                body: req.body.body,
                published: new Date().toISOString().slice(0, 19).replace('T', ' '),
                author_id: req.body.author_id
            })
        })
        .then(() => {
            return res.status(200).json({ message: 'Article updated.' })
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
    }
}

// export controller functions
module.exports = { createArticle, updateArticle } 
