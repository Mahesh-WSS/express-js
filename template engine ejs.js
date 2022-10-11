const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs')

app.get('', (_,res) => {
    res.render('index');
})
app.get('/profile', (_,res) => {
    const user = {
        name: 'Mahesh Yennam',
        email: 'mahesh@test.com',
        city: 'mumbai',
        skills: ['python', 'js', 'java', 'php', 'c++']
    }
    res.render('profile', {user});
})

app.get('/login', (_,res) => {
    res.render('login');
})

app.listen(4500);