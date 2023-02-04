// Import 
const express = require('express')
const app = express();
const bodyParser = require('body-parser')  // 
const morgan = require('morgan') // for API status
const colors = require('colors')

// Port number
const PORT = 5000

// Running on PORt
app.listen(PORT, () => {
    console.log(`Express listening on port :  ${PORT} `.green);
})

// View engine

app.set('view engine', 'pug')
app.set('views', './views')
// Middlewares
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))
// Route
// best practice api -> version-> name
app.use('/api/v1/users', require('./routes/userRoutes'))

// viewRoute
app.get('/', (request, response) => {
    response.render('index')
})


