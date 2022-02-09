const express = require('express');
const {projects} = require('./data.json');

const app = express();

//Use a static route and the express.static method to serve the static files located in the public folder, like images, css, js
app.use('/static', express.static('public'));

// set view engine to pug
app.set('view engine', 'pug');

// app.get()
app.get('/', (req, res) => {
    res.render('index', {projects})
});


const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`The server is running on local host: ${port}!`);
});