const dotenv = require ('dotenv')
const express = require ("express")
const app = express()
dotenv.config()

// parse requests of content type - application/json
app.use(express.json())

// parse requests of content type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

// connect to database
const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
} )

sequelize.authenticate()
  .then(() => console.log('Andmebaas ühendatud!'))
  .catch(err => console.error('Viga:', err));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to sequelize application."} )
} )

// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
} )

