require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', error => {})
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Jordi',
    title: 'Course'
  })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Jordi',
        title: 'Course'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Jordi',
        title: 'Course'
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})