'use strict';

// const controller = require('../controllers/controller');

// module.exports = (app) => {
// app.route('/about').get(controller.about);
// app.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance);
// }


var express = require('express');
var router = express.Router();
const { createUser, userLogin, updateProfile, getCurrentUser } = require('./controller')

// Routes
router.get('/', function (req, res, next) { res.send('hello from user router'); });
router.post('/create-user', checkIsEmpty, validateEmail, validateUserData, createUser)
router.get('/user', jwtMiddleware, getCurrentUser)
router.put('/update-profile', jwtMiddleware, checkIsEmpty, validateUserData, confirmPassword, updateProfile)
router.post('/login', validateEmail, userLogin)

module.exports = router