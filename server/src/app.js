const express = require('express');

const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
})); // Allows for cross-origin requests
app.use(express.json()); // Checks for json info when a request comes in
app.use(planetsRouter); // directs requests to the planets router

module.exports = app;