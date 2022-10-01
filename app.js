// Environment
import * as dotenv from 'dotenv'
dotenv.config()

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000
console.log('Environment: ', env)

// Express
import express from 'express'
const app = express()

// CORS
import cors from 'cors'
app.use(cors());

// Routes
import { apiRouter } from './api/routes.js'
app.use('/pexels', apiRouter)

// App
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})