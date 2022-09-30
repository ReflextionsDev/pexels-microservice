// add URL var as env // also type dev or not (run dev > localhost)
// env local vs. prod
// if local use host, if prod use domain from env

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


import express from 'express'
import { apiRouter } from './api/routes.js';


const app = express();


console.log('environment: ', process.env.NODE_ENV)

// Routes
app.use('/pexels', apiRouter)


const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});