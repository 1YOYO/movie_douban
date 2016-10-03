;(function(angular){
	'use strict';
	var app = angular.module('app');

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/hot', {
			templateUrl: "../view/hot/view.html",
			controller: 'hotcontroller'
		}).when('/future', {
			templateUrl: "../view/future/view.html",
			controller: "futurecontroller"
		}).when('/top', {
			templateUrl: "../view/top/view.html",
			controller: "topcontroller"
		}).when('/subject/:id', {
			templateUrl: '../view/detail/view.html',
			controller: 'detailController'
		}).when('/search/:text', {
			templateUrl: '../view/search/view.html',
			controller: 'searchController'
		}).otherwise({
			redirectTo: '/hot'
		});
	}]);
})(angular);