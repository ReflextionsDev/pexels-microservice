// Express
import express from 'express'
const router = express.Router()

// Routes
import { getCurated, getSearch } from './controller.js'

router.get('/', (req, res) => { res.send('pexel microservice is running') })
router.get('/curated/:page', getCurated)
router.get('/search/:query/:page', getSearch)

export { router as apiRouter }