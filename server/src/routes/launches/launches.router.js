const express = require('express');

const { httpGetAllLaunches } = require('./launches.controller');

const launchesRouter = express.Router();

//GET launches
launchesRouter.get('/launches', httpGetAllLaunches);

module.exports= launchesRouter;