const express = require('express');

const { getAllLaunches } = require('./launches.controller');

const launchesRouter = express.Router();

//GET launches
launchesRouter.get('/launches', getAllLaunches);

module.exports= launchesRouter;