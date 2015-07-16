'use strict';

app.controller('LogoutCtrl', function ($scope, Auth, $state, $http) {
	
	$scope.logoutUser = function (userData) {
		$http.get('Auth/logout').then(function(res){
			console.log("user logged out")
		})
		// Auth.login(userData)
		// .then(function (loggedinUser) {
		// 	$state.go('user', {id: loggedinUser._id});
		// })
		// .catch(function (e) {
		// 	console.log('error logging in', e);
		// });
	};
});