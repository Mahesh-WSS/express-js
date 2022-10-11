const express = require('express');
const reqFilter = require('./middleware function');

const app = express();

app.get('', (req,res) => {
    res.send('Welcome to Home page');
})

// applying middleware at route-level
app.get('/users', reqFilter, (req,res) => {
    res.send('Welcome to Users page');
})

app.get('/about', reqFilter, (req,res) => {
    res.send('Welcome to About page');
})

app.listen(5000);