'use strict';

const models = require('../models/index').sql;
const _ = require('lodash');
const Promise = require("bluebird");
const moment = require('moment');

const HomeController = {
	index : function(req, res, next) {
		
		res.success({
			data: "Hello, Welcome."
		});
	},
	getenvironment : function(req, res, next) {
		
		res.success({
			data : "process.env"
		});
	},
	getSampleData : function(req, res, next){
		
		models.sample.findByPk('211A6355-CE75-4E50-8813-0E397E69CC26')
				.then(function(data) {
					res.success({
						totalRecords : _.size(data),
						data : data
					});
				})
				.catch((err) => {
					res.error(err);
				});
	}
};

module.exports = {
	HomeController
};
