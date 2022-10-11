const express = require('express');
const reqFilter = require('./middleware function');
const route = express.Router();

const app = express();

route.use(reqFilter);

app.get('', (req,res) => {
    res.send('Welcome to Home page');
})

// applying middleware at route-level
app.get('/users', (req,res) => {
    res.send('Welcome to Users page');
})

route.get('/about', (req,res) => {
    res.send('Welcome to About page');
})

route.get('/contact', (req,res) => {
    res.send('Welcome to Contact page');
})

app.use('/',route);
app.listen(5000);