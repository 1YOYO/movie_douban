;(function(angular){
	'use strict';
	var app = angular.module('app');

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/hot', {
			templateUrl: "../view/hot/view.html",
			controller: 'hotcontroller'
		}).when('/futrue', {
			templateUrl: "../view/future/view.html",
			controller: "futurecontroller"
		}).when('/top', {
			templateUrl: "../view/top/view.html",
			controller: "topcontroller"
		}).otherwise({
			redirectTo: '/hot'
		});
	}]);
})(angular);