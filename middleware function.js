// middleware function to chech the age
module.exports = (req,res,next) => {
    if(!req.query.age) {
        res.send('Please provide age');
    } else if (req.query.age<18) {
        res.send('You cannot access this page');
    } else{
        next();
    }
}