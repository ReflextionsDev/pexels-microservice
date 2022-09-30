// 'use strict';


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