(function(angular) {
    'use strict';
    var app = angular.module("app");
    /*建立jsonp函数*/
	app.service('httpService', [function(){
        this.jsonp = function(url, data, fn){
            /*成功调取数据后要执行的回掉函数*/
            function getData(data){
                fn(data);
                document.body.removeChild(script);
            }
            window['getData'] = getData ;
            /*searchData的格式*/
            var searchData = '?';
            for(var i in data){
                searchData = searchData + i + "=" + data[i] + "&";
            }

           /* 1.创建一个script标签并添加属性插入到body体内*/
           var script = document.createElement("script");
           script.src = url + searchData + "callback=getData";
           console.log(script.src);
          document.body.appendChild(script);
        }
    }])		
			
			
			
		

})(angular);