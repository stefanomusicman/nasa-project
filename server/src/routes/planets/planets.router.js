const express = require('express');

const { httpGetAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// GET Planets
planetsRouter.get('/', httpGetAllPlanets)

module.exports = planetsRouter;