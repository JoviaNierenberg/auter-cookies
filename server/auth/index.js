'use strict';

var router = require('express').Router();
var User = require('../api/users/user.model');

router.post('/login', function (req, res, next) {
	// find user by email and password
	// if they exist send them back to the frontend
	// if they don't error 401
	User.findByEmail(req.body.email).exec()
	.then(function (user) {
		if (user && user.authenticate(req.body.password)) {
			if (!req.session.userId) req.session.userId = user._id;
    		console.log('user id: ', req.session.userId);
    		console.log('user name: ', user.email)

			res.json(user);

			return;
		}
		// did not find user
		var err = new Error('Not Authenticated');
		err.status = 401;
		next(err);
	})
	// error with query/db
	.then(null, next);
});

router.get('/logout', function(req, res, next){
	console.log('in logout route')
	console.log("user id before logging out: ", req.session.userId)
	if (req.session.userId) req.session.userId = null
	console.log("user id after logging out: ", req.session.userId)
	next()
})


module.exports = router;