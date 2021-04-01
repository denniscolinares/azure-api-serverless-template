'use strict';

const models = require('../models/index').dynamodb;
const _ = require('lodash');
const Promise = require("bluebird");
const moment = require('moment');
const winston = require('../../library/winston');

const sampleFunction = function(context, timerObj){
	context.log('Timer ran');
	context.done();
};

module.exports = sampleFunction;
