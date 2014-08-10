module.exports = function (app) {
	var mongoose = require('mongoose');
	var models = require('./models/hacker.js')(mongoose);

	app.get('/api/hackers', function (req, res) {
		Hacker.find(function (err, hackers) {
			if(err) {
				res.send(err);
			}
			res.json(hackers);
		})
	});

	app.get('api/hacker/:email', function (req, res) {
		console.log(req.params.email);	
	});

	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});
};
