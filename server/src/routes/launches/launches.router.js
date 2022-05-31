const express = require('express');

const { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launches.controller');

const launchesRouter = express.Router();

//GET launches
launchesRouter.get('/', httpGetAllLaunches);

//POST new launch
launchesRouter.post('/', httpAddNewLaunch);

//DELETE launch
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports= launchesRouter;