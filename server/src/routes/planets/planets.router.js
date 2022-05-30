const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// GET Planets
planetsRouter.get('/planets', httpGetAllPlanets)

module.exports = planetsRouter;