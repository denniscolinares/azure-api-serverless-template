'use strict';

const _ = require('lodash');
const Promise = require("bluebird");
const axios = require('axios');
const moment = require('moment');

const warmupFunction = async function(context, timerObj){
	const timeStamp = moment().toISOString();
	const url = "https://" + process.env.WEBSITE_CONTENTSHARE + ".azurewebsites.net/" + process.env.DOMAIN_BASEPATH;
	
	context.log("URL = ", url);
	
	try{
		const res = await axios.get(url);
		context.log("Response = ", res.data);
	}
	catch (err){
		context.log("Error = ", err);
	}
	
	context.done();
};

module.exports = warmupFunction;
