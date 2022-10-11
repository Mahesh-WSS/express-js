const express = require('express');

const app = express();

// middleware function to chech the age
const reqFilter = (req,res,next) => {
    if(!req.query.age) {
        res.send('Please provide age');
    } else if (req.query.age<18) {
        res.send('You cannot access this page');
    } else{
        next();
    }
}
// applying middleware at applicatin-level
app.use(reqFilter)

app.get('', (req,res) => {
    res.send('Welcome to Home page');
})

app.get('/users', (req,res) => {
    res.send('Welcome to Users page');
})

app.listen(5000);
