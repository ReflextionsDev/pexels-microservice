'use strict'


import express from 'express'
var router = express.Router()


import { getCurated, getSearch } from './controller.js'

// const { doSomething } = require('./controller')

// Curation, Search
// Routes need post params, current page, search term
// Store search term & page/ in local cookie

// Routes
// Add middleware to parse out page, then could assemble thing?
router.get('/', (req, res) => { res.send('pexel microservice is running') })
router.get('/curated/:page', getCurated)
router.get('/search/:query/:page', getSearch)

export { router as apiRouter }