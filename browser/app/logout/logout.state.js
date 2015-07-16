'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('logout', {
		url: '/logout',
		templateUrl: '/browser/app/logout/logout.html',
		controller: 'LogoutCtrl'
	});
});