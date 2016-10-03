(function(angular){
	var app = angular.module("app");
	app.controller('hotcontroller',['$scope','httpService', function($scope, httpService){
		$scope.datalist ={}
       
        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/in_theaters";
            httpService.jsonp(url, {
                start:start, 
                count: 10
            }, function(data) {
                $scope.datalist = data;
                $scope.$apply();
            }); 
        }
        getMovie(0);
	}]);
})(angular)