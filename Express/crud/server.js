const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/main')


// template engine
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname) + '/templates');  if not default views folder


// server started
app.listen(3000, () => {
    console.log('Listening on port 3000')
});

// Middleware for static files like css and Assets -> add .html in anchor tag
app.use(express.static('public'))

// OR

app.use(mainRouter)






