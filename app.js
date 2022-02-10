const express = require('express');
const {projects} = require('./data.json');

const app = express();

//Use a static route and the express.static method to serve the static files located in the public folder, like images, css, js
app.use('/static', express.static('public'));

// set view engine to pug
app.set('view engine', 'pug');

// get home page
app.get('/', (req, res) => {
    res.render('index', {projects})
});

// get about page
app.get('/about', (req, res) =>{
    res.render('about')
})

//get project page
app.get('/project/:id',(req, res) =>{
    res.render('project', {id:req.params.id, projects});
})

// Error handlers

// 404 handler to catch undefined or non-existent requests
app.use((req,res,next) => {
    const err = new Error();
    err.status = 404;
    res.status(404).render('page-not-found', {err: err.status})
    console.log(err);
})
//Error Handling for Global status errors
app.use((err,req,res,next) => {
    err.status = 500
    res.status(500).render('error', {err})
    console.log(err);
})


// Local Port
const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`The server is running on local host: ${port}!`);
});