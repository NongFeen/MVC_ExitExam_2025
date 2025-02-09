const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


//route of api then call in controller
router.get('/', userController.getAllUsers);  
router.get('/:id', userController.getUserById); 
module.exports = router;
