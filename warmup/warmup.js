'use strict';

const _ = require('lodash');
const Promise = require("bluebird");
const moment = require('moment');

const warmupFunction = function(context, timerObj){
	var timeStamp = new Date().toISOString();
	
	if (timerObj.IsPastDue)
	{
		context.log('Node is running late!');
	}
	
	context.log('Node timer trigger function ran!', timeStamp);
	
	context.log(timerObj);
	
	context.done();
};

module.exports = warmupFunction;
