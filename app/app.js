;(function(angular){
	'use strict';
	var app = angular.module('app', ["ngRoute"]);
	app.controller('searchController' ,['$scope','$location', function($scope, $location){
		var url = "http://api.douban.com/v2/movie/search";

		$scope.searchMovie = function(search){
			$location.path("/search/" + search)
			console.log($location.path("/search/" + search))
		}
		
		$scope.searchText = '';
	}])
})(angular);