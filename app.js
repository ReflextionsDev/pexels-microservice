// require("dotenv").config()



// const express = require('express');



import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


import express from 'express'
import { apiRouter } from './api/routes.js';


const app = express();




// const apiRouter = require('./api/routes.js');


// Routes
app.use('/pexels', apiRouter)



const port = process.env.PORT || 3000


console.log('yo')

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});