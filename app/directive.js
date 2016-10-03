;(function(angular){
	var app = angular.module('app');
	app.directive('focus', function(){
		return {
    		restrict: 'EA' ,
    		link: function(scope, element , attr){
    			element.on('click', function(){
    				element.parent().children().attr('class','');
    				element.addClass('active');
    			})
    		}
    	}
	})
})(angular)