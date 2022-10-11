const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send(`
    <h1>Welcome, this is Home page</h1>
    <a href="/about">Go to About Page</a>
    `);
});

app.get('/about', (req, res)=>{
    res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click Me</button> <br>
    <a href="/">Go to Home Page</a>
    `);
});

app.get('/help', (req, res)=>{
    res.send([
        {
            name: 'Mahesh',
            email: "m@test.com"
        },
        {
            name: 'Anil',
            email: "a@test.com"
        }
    ]);
});

app.listen(4500); 