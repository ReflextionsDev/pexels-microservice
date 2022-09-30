// 'use strict';

// const controller = require('../controllers/controller');

// module.exports = (app) => {
// app.route('/about').get(controller.about);
// app.route('/distance/:zipcode1/:zipcode2').get(controller.getDistance);
// }

console.log('routes.js')

// var express = require('express');
import express from 'express'
import { doSomething } from './controller.js';

var router = express.Router();
// const { doSomething } = require('./controller')

// Curation, Search
// Routes need post params, current page, search term
// Store search term / in local cookie

// Routes
router.get('/', function (req, res, next) { res.send('response from pexel microservice'); });
router.get('/yeet', doSomething)

// module.exports = router

export { router as apiRouter};