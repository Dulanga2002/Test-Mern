const { response } = require('./app');
const User = require('./model');


const getUsers = (req,res,next) => {
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    });
};

const addUsers = (req,res,next) => {
    const user = new User({ 
        id: req.body.id,
        name: req.body.name

}

exports.getUsers = getUsers;
exports.getUserById = getUserById;
