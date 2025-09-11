const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.get('/users', controller.getUsers);
router.post('/createuser', controller.addUsers);
router.put('/updateuser', controller.updateUser);
router.delete('/deleteuser', controller.deleteUser);


module.exports = router;