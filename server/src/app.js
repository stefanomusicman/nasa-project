const path = require('path');

const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

//Routers
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
})); // Allows for cross-origin requests

app.use(morgan('combined'));

app.use(express.json()); // Checks for json info when a request comes in

app.use(express.static(path.join(__dirname, '..', 'public'))); // Serves the React Code that was brought in from the client folder...now the public folder

app.use(planetsRouter); // directs requests to the planets router

app.use(launchesRouter); // directs requests to the launches router

app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;