(function(angular) {
    'use strict';
    var app = angular.module("app");
    app.service('httpserver',[function(){
    	this.jsonp = function(url, data, fn){
    		function getData(data){
    			fn(data);
    			document.body.removeChild(script);
    		}
    		window['getData'] = getData ;
    		var serchData = '?';
    		for(var i in data){
    			searchData += i + "=" + data[i] + "&";
    		}
    		var script = document.createElement("script");
		
			script.src = url + searchData + "callback=getData";
			console.log(script.src);
		
			document.body.appendChild(script);

    	}
    }]);
  
			
			
			
			
		

})(angular);