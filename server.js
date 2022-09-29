require("dotenv").config()

const express = require('express');
const app = express();

const routes = require('./api/routes.js');
routes(app);

const port = process.env.PORT || 3000;


console.log('yo')

app.listen(port, () => {
console.log(`Listening to port http://localhost:${port}`);
});