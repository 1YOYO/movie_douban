;(function(angular){
    var app = angular.module('app');
   app.controller('futurecontroller',['$scope','httpService', function($scope, httpService){
		$scope.datalist ={};
        
        var pageSize = 10;
        var page = 1;
        var start = pageSize * (page-1);

        $scope.totalPage = 1;
        $scope.currentPage = 1 ;
       
        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/coming_soon";
            httpService.jsonp(url, {
                start:start, 
                count: 10
            }, function(data) {
                $scope.datalist = data;
                $scope.totalPage = Math.ceil(data.total/pageSize);
                $scope.$apply();
            }); 
        }
        getMovie(0);

         $scope.goNext = function(currentPage) {
            if(currentPage <= $scope.totalPage) {
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage++;
            }
        };

        $scope.goPre = function(currentPage) {
            if(currentPage >= 1) {
                var start = pageSize * (currentPage - 1);
                getMovie(start);
                $scope.currentPage--;
            }
        };
	}]);
})(angular)