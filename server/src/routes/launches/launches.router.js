const express = require('express');

const { httpGetAllLaunches, httpAddNewLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

//GET launches
launchesRouter.get('/', httpGetAllLaunches);

//POST new launch
launchesRouter.post('/', httpAddNewLaunch);

module.exports= launchesRouter;