// Environment
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

const env = process.env.NODE_ENV || 'local'
const port = process.env.PORT || 3000
console.log('Environment: ', env)

// Express
import express from 'express'
const app = express();

// Routes
import { apiRouter } from './api/routes.js';
app.use('/pexels', apiRouter)

// App
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});