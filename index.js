const dotenv = require ('dotenv')
dotenv.config()
const express = require ("express")
const sequelize = require('./config/database')
const app = express()


// parse requests of content type - application/json
app.use(express.json())

// parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

sequelize.authenticate()
  .then(() => console.log('Andmebaas ühendatud!'))
  .catch(err => console.error('Viga:', err));

// using routes and controllers
const articleRouter = require('./routes/article')
app.use('/', articleRouter)
app.use('/article', articleRouter)

// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
} )

