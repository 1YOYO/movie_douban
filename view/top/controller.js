(function(angular){
    var app = angular.module("app");
    app.controller('topcontroller',['$scope','httpService', function($scope, httpService){
        $scope.datalist ={}
       
        function getMovie(start) {
            var url = "http://api.douban.com/v2/movie/top250";
            httpService.jsonp(url, {
                start:start, 
                count: 10
            }, function(data) {
                console.log(data);
                $scope.datalist = data;
                $scope.$apply();
            }); 
        }
        getMovie(0);
    }]);
})(angular)