;(function(angular){
    var app = angular.module('app');
    app.controller('topcontroller',['$scope',function($scope){
       $scope.datalist = {
            "count": 20,
            "start": 0,
            "total": 31,
            "subjects": [{
                "rating": {
                    "max": 10,
                    "average": 7.7,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "爱情"
                ],
                "title": "七月与安生",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1274224/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/36798.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/36798.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/36798.jpg"
                    },
                    "name": "周冬雨",
                    "id": "1274224"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1275243/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1417875699.12.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1417875699.12.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1417875699.12.jpg"
                    },
                    "name": "马思纯",
                    "id": "1275243"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1349387/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1431402028.37.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1431402028.37.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1431402028.37.jpg"
                    },
                    "name": "李程彬",
                    "id": "1349387"
                }],
                "collect_count": 56426,
                "original_title": "七月与安生",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1274534/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/10707.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/10707.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/10707.jpg"
                    },
                    "name": "曾国祥",
                    "id": "1274534"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2378140502.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2378140502.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2378140502.jpg"
                },
                "alt": "https://movie.douban.com/subject/25827935/",
                "id": "25827935"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.7,
                    "stars": "30",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "爱情"
                ],
                "title": "从你的全世界路过",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1274235/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/805.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/805.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/805.jpg"
                    },
                    "name": "邓超",
                    "id": "1274235"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1275542/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/21559.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/21559.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/21559.jpg"
                    },
                    "name": "白百何",
                    "id": "1275542"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1276051/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1435567211.65.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1435567211.65.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
                    },
                    "name": "杨洋",
                    "id": "1276051"
                }],
                "collect_count": 3348,
                "original_title": "从你的全世界路过",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1275554/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/11460.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/11460.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/11460.jpg"
                    },
                    "name": "张一白",
                    "id": "1275554"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2382076389.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg"
                },
                "alt": "https://movie.douban.com/subject/26280528/",
                "id": "26280528"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": [
                    "动画",
                    "奇幻"
                ],
                "title": "爵迹",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1050059/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1691.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1691.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1691.jpg"
                    },
                    "name": "范冰冰",
                    "id": "1050059"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1337000/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1401722517.74.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1401722517.74.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1401722517.74.jpg"
                    },
                    "name": "吴亦凡",
                    "id": "1337000"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1326363/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1379305092.53.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1379305092.53.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1379305092.53.jpg"
                    },
                    "name": "陈学冬",
                    "id": "1326363"
                }],
                "collect_count": 4221,
                "original_title": "爵迹",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1313751/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1372241745.58.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1372241745.58.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1372241745.58.jpg"
                    },
                    "name": "郭敬明",
                    "id": "1313751"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2377470803.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2377470803.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2377470803.jpg"
                },
                "alt": "https://movie.douban.com/subject/26354336/",
                "id": "26354336"
            }, {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "stars": "00",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "犯罪"
                ],
                "title": "湄公河行动",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1274319/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/49047.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/49047.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/49047.jpg"
                    },
                    "name": "张涵予",
                    "id": "1274319"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1013782/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1368156632.65.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1368156632.65.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1368156632.65.jpg"
                    },
                    "name": "彭于晏",
                    "id": "1013782"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1274640/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/5979.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/5979.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/5979.jpg"
                    },
                    "name": "孙淳",
                    "id": "1274640"
                }],
                "collect_count": 330,
                "original_title": "湄公河行动",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1275075/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1372934445.18.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1372934445.18.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1372934445.18.jpg"
                    },
                    "name": "林超贤",
                    "id": "1275075"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2380677316.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2380677316.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2380677316.jpg"
                },
                "alt": "https://movie.douban.com/subject/25815034/",
                "id": "25815034"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.8,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画"
                ],
                "title": "逗鸟外传：萌宝满天飞",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1025187/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/48146.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/48146.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/48146.jpg"
                    },
                    "name": "安迪·萨姆伯格",
                    "id": "1025187"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1360587/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1472976828.3.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1472976828.3.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1472976828.3.jpg"
                    },
                    "name": "凯蒂·克朗",
                    "id": "1360587"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1031847/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1396501988.66.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1396501988.66.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1396501988.66.jpg"
                    },
                    "name": "凯尔希·格兰莫",
                    "id": "1031847"
                }],
                "collect_count": 4757,
                "original_title": "Storks",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1031179/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/19194.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/19194.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/19194.jpg"
                    },
                    "name": "尼古拉斯·斯托勒",
                    "id": "1031179"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1298729/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1370511874.76.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1370511874.76.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1370511874.76.jpg"
                    },
                    "name": "道格·斯威特兰德",
                    "id": "1298729"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2378515005.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2378515005.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2378515005.jpg"
                },
                "alt": "https://movie.douban.com/subject/26374205/",
                "id": "26374205"
            }, {
                "rating": {
                    "max": 10,
                    "average": 4,
                    "stars": "20",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "爱情",
                    "奇幻"
                ],
                "title": "大话西游3",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1275667/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/14025.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/14025.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/14025.jpg"
                    },
                    "name": "韩庚",
                    "id": "1275667"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1274479/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/48044.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/48044.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/48044.jpg"
                    },
                    "name": "唐嫣",
                    "id": "1274479"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1000525/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/39105.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/39105.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/39105.jpg"
                    },
                    "name": "吴京",
                    "id": "1000525"
                }],
                "collect_count": 20893,
                "original_title": "大话西游3",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1274431/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/45374.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/45374.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/45374.jpg"
                    },
                    "name": "刘镇伟",
                    "id": "1274431"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2377676571.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2377676571.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2377676571.jpg"
                },
                "alt": "https://movie.douban.com/subject/26284595/",
                "id": "26284595"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.6,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "喜剧",
                    "犯罪"
                ],
                "title": "追凶者也",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1000572/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/43.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/43.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/43.jpg"
                    },
                    "name": "刘烨",
                    "id": "1000572"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1274761/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/25943.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/25943.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/25943.jpg"
                    },
                    "name": "张译",
                    "id": "1274761"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1313011/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1381668667.53.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1381668667.53.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1381668667.53.jpg"
                    },
                    "name": "段博文",
                    "id": "1313011"
                }],
                "collect_count": 39821,
                "original_title": "追凶者也",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1274278/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/811.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/811.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/811.jpg"
                    },
                    "name": "曹保平",
                    "id": "1274278"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2375882763.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2375882763.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2375882763.jpg"
                },
                "alt": "https://movie.douban.com/subject/26284621/",
                "id": "26284621"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.3,
                    "stars": "30",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "犯罪"
                ],
                "title": "反贪风暴2",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1027577/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1419164245.74.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1419164245.74.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1419164245.74.jpg"
                    },
                    "name": "古天乐",
                    "id": "1027577"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1050979/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1241.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1241.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1241.jpg"
                    },
                    "name": "张智霖",
                    "id": "1050979"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1274366/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/55133.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/55133.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/55133.jpg"
                    },
                    "name": "周渝民",
                    "id": "1274366"
                }],
                "collect_count": 8632,
                "original_title": "S風暴",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1326068/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1357529568.73.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1357529568.73.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1357529568.73.jpg"
                    },
                    "name": "林德禄 ",
                    "id": "1326068"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2370795749.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2370795749.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2370795749.jpg"
                },
                "alt": "https://movie.douban.com/subject/26352445/",
                "id": "26352445"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.2,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "动画"
                ],
                "title": "樱桃小丸子：来自意大利的少年",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1158006/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/34272.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/34272.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/34272.jpg"
                    },
                    "name": "鳕子",
                    "id": "1158006"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1034285/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1360931482.52.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1360931482.52.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1360931482.52.jpg"
                    },
                    "name": "屋良有作",
                    "id": "1034285"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1149171/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1361071539.21.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1361071539.21.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1361071539.21.jpg"
                    },
                    "name": "一龙斋贞友",
                    "id": "1149171"
                }],
                "collect_count": 7623,
                "original_title": "ちびまる子ちゃん イタリアから来た少年",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1361974/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                        "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                        "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                    },
                    "name": "高木淳",
                    "id": "1361974"
                }],
                "year": "2015",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2383897820.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2383897820.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2383897820.jpg"
                },
                "alt": "https://movie.douban.com/subject/26469862/",
                "id": "26469862"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.1,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "奇幻",
                    "家庭"
                ],
                "title": "九条命",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1054432/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/5491.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/5491.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/5491.jpg"
                    },
                    "name": "凯文·史派西",
                    "id": "1054432"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1054512/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/26079.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/26079.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/26079.jpg"
                    },
                    "name": "詹妮弗·加纳",
                    "id": "1054512"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1341527/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1431582872.35.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1431582872.35.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1431582872.35.jpg"
                    },
                    "name": "玛丽娜·维丝曼",
                    "id": "1341527"
                }],
                "collect_count": 21050,
                "original_title": "Nine Lives",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1002772/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/7221.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/7221.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/7221.jpg"
                    },
                    "name": "巴里·索南菲尔德",
                    "id": "1002772"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2378310691.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2378310691.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2378310691.jpg"
                },
                "alt": "https://movie.douban.com/subject/26314816/",
                "id": "26314816"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.5,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "纪录片"
                ],
                "title": "地球四季",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1041404/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1368761950.19.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1368761950.19.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1368761950.19.jpg"
                    },
                    "name": "黄晓明",
                    "id": "1041404"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1020487/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1477.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1477.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1477.jpg"
                    },
                    "name": "蒋雯丽",
                    "id": "1020487"
                }],
                "collect_count": 666,
                "original_title": "Les saisons",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1010752/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/111.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/111.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/111.jpg"
                    },
                    "name": "雅克·贝汉",
                    "id": "1010752"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1280923/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/21921.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/21921.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/21921.jpg"
                    },
                    "name": " 雅克·克鲁奥德",
                    "id": "1280923"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2384063655.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2384063655.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2384063655.jpg"
                },
                "alt": "https://movie.douban.com/subject/26290455/",
                "id": "26290455"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.5,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "科幻",
                    "冒险"
                ],
                "title": "星际迷航3：超越星辰",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1053621/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/545.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/545.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/545.jpg"
                    },
                    "name": "克里斯·派恩",
                    "id": "1053621"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1041010/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1364569064.71.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1364569064.71.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1364569064.71.jpg"
                    },
                    "name": "扎克瑞·昆图",
                    "id": "1041010"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1047985/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1361267503.33.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1361267503.33.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1361267503.33.jpg"
                    },
                    "name": "佐伊·索尔达娜",
                    "id": "1047985"
                }],
                "collect_count": 62793,
                "original_title": "Star Trek Beyond",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1290066/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/20902.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/20902.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/20902.jpg"
                    },
                    "name": "林诣彬",
                    "id": "1290066"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2377455123.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2377455123.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2377455123.jpg"
                },
                "alt": "https://movie.douban.com/subject/22939161/",
                "id": "22939161"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.2,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "惊悚",
                    "冒险"
                ],
                "title": "鲨滩",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1041026/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/27872.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/27872.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/27872.jpg"
                    },
                    "name": "布蕾克·莱弗利",
                    "id": "1041026"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1044925/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/3588.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/3588.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/3588.jpg"
                    },
                    "name": "奥斯卡·贾恩那达",
                    "id": "1044925"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1049693/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/10889.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/10889.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/10889.jpg"
                    },
                    "name": "布莱特·卡伦",
                    "id": "1049693"
                }],
                "collect_count": 33493,
                "original_title": "The Shallows",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1214705/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/20263.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/20263.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/20263.jpg"
                    },
                    "name": "佐米·希尔拉",
                    "id": "1214705"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2376093772.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2376093772.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2376093772.jpg"
                },
                "alt": "https://movie.douban.com/subject/26000205/",
                "id": "26000205"
            }, {
                "rating": {
                    "max": 10,
                    "average": 5.3,
                    "stars": "30",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "历史",
                    "战争"
                ],
                "title": "我的战争",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1000572/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/43.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/43.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/43.jpg"
                    },
                    "name": "刘烨",
                    "id": "1000572"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1274301/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1471416098.13.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1471416098.13.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1471416098.13.jpg"
                    },
                    "name": "王珞丹",
                    "id": "1274301"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1051157/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/4991.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/4991.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/4991.jpg"
                    },
                    "name": "杨祐宁",
                    "id": "1051157"
                }],
                "collect_count": 10827,
                "original_title": "我的战争",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1280774/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/17763.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/17763.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/17763.jpg"
                    },
                    "name": "彭顺",
                    "id": "1280774"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2376859070.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2376859070.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2376859070.jpg"
                },
                "alt": "https://movie.douban.com/subject/25945350/",
                "id": "25945350"
            }, {
                "rating": {
                    "max": 10,
                    "average": 6.4,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "动作"
                ],
                "title": "巴黎危机",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1049501/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1410696326.11.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1410696326.11.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1410696326.11.jpg"
                    },
                    "name": "伊德里斯·艾尔巴",
                    "id": "1049501"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1314927/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/28224.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/28224.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/28224.jpg"
                    },
                    "name": "理查德·麦登",
                    "id": "1314927"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1009283/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1362911757.73.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1362911757.73.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1362911757.73.jpg"
                    },
                    "name": "凯利·蕾莉",
                    "id": "1009283"
                }],
                "collect_count": 3314,
                "original_title": "Bastille Day",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1304811/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/54060.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/54060.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/54060.jpg"
                    },
                    "name": "詹姆斯·瓦特金斯",
                    "id": "1304811"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2379938430.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2379938430.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2379938430.jpg"
                },
                "alt": "https://movie.douban.com/subject/25834333/",
                "id": "25834333"
            }, {
                "rating": {
                    "max": 10,
                    "average": 8,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "纪录片"
                ],
                "title": "我们诞生在中国",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1027798/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/7257.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/7257.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/7257.jpg"
                    },
                    "name": "周迅",
                    "id": "1027798"
                }],
                "collect_count": 34034,
                "original_title": "Born in China",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1005319/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1368697548.88.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1368697548.88.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1368697548.88.jpg"
                    },
                    "name": "陆川",
                    "id": "1005319"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2373180408.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2373180408.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2373180408.jpg"
                },
                "alt": "https://movie.douban.com/subject/26376454/",
                "id": "26376454"
            }, {
                "rating": {
                    "max": 10,
                    "average": 3,
                    "stars": "15",
                    "min": 0
                },
                "genres": [
                    "犯罪",
                    "悬疑",
                    "惊悚"
                ],
                "title": "诡梦凶铃",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1171687/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/52125.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/52125.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/52125.jpg"
                    },
                    "name": "方力申",
                    "id": "1171687"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1318220/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/42394.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/42394.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/42394.jpg"
                    },
                    "name": "李斯丹妮",
                    "id": "1318220"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1362526/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                        "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                        "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                    },
                    "name": "何映桥",
                    "id": "1362526"
                }],
                "collect_count": 192,
                "original_title": "诡梦凶铃",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1319338/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/46680.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/46680.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/46680.jpg"
                    },
                    "name": "邓安东",
                    "id": "1319338"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2382005024.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2382005024.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2382005024.jpg"
                },
                "alt": "https://movie.douban.com/subject/26582780/",
                "id": "26582780"
            }, {
                "rating": {
                    "max": 10,
                    "average": 7.4,
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "动作",
                    "科幻"
                ],
                "title": "寄生兽",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1315737/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/50940.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/50940.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/50940.jpg"
                    },
                    "name": "染谷将太",
                    "id": "1315737"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1014844/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/16385.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/16385.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/16385.jpg"
                    },
                    "name": "深津绘里",
                    "id": "1014844"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1045927/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1421.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1421.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1421.jpg"
                    },
                    "name": "阿部隆史",
                    "id": "1045927"
                }],
                "collect_count": 62460,
                "original_title": "寄生獣",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1301398/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/53321.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/53321.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/53321.jpg"
                    },
                    "name": "山崎贵",
                    "id": "1301398"
                }],
                "year": "2014",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2375921261.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2375921261.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2375921261.jpg"
                },
                "alt": "https://movie.douban.com/subject/25774050/",
                "id": "25774050"
            }, {
                "rating": {
                    "max": 10,
                    "average": 6.6,
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "冰川时代5：星际碰撞",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1035648/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/8176.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/8176.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/8176.jpg"
                    },
                    "name": "西蒙·佩吉",
                    "id": "1035648"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1326968/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1361845924.56.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1361845924.56.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1361845924.56.jpg"
                    },
                    "name": "洁茜J ",
                    "id": "1326968"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1027262/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/5082.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/5082.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/5082.jpg"
                    },
                    "name": "杰西·泰勒·弗格森",
                    "id": "1027262"
                }],
                "collect_count": 30033,
                "original_title": "Ice Age: Collision Course",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1299248/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/47476.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/47476.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/47476.jpg"
                    },
                    "name": "麦克·特米尔",
                    "id": "1299248"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1304031/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                        "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                        "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
                    },
                    "name": "加仑·T·楚",
                    "id": "1304031"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2365823697.jpg",
                    "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2365823697.jpg",
                    "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2365823697.jpg"
                },
                "alt": "https://movie.douban.com/subject/25797778/",
                "id": "25797778"
            }, {
                "rating": {
                    "max": 10,
                    "average": 4.9,
                    "stars": "25",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "爱情"
                ],
                "title": "我们的十年",
                "casts": [{
                    "alt": "https://movie.douban.com/celebrity/1275620/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1460551151.6.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1460551151.6.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1460551151.6.jpg"
                    },
                    "name": "赵丽颖",
                    "id": "1275620"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1275913/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/53204.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/53204.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/53204.jpg"
                    },
                    "name": "乔任梁",
                    "id": "1275913"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1313603/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/1411650601.88.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/1411650601.88.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/1411650601.88.jpg"
                    },
                    "name": "吴映洁",
                    "id": "1313603"
                }],
                "collect_count": 3534,
                "original_title": "我们的十年",
                "subtype": "movie",
                "directors": [{
                    "alt": "https://movie.douban.com/celebrity/1290574/",
                    "avatars": {
                        "small": "http://img3.doubanio.com/img/celebrity/small/21289.jpg",
                        "large": "http://img3.doubanio.com/img/celebrity/large/21289.jpg",
                        "medium": "http://img3.doubanio.com/img/celebrity/medium/21289.jpg"
                    },
                    "name": "马伟豪",
                    "id": "1290574"
                }, {
                    "alt": "https://movie.douban.com/celebrity/1362507/",
                    "avatars": {
                        "small": "http://img7.doubanio.com/img/celebrity/small/1474513553.71.jpg",
                        "large": "http://img7.doubanio.com/img/celebrity/large/1474513553.71.jpg",
                        "medium": "http://img7.doubanio.com/img/celebrity/medium/1474513553.71.jpg"
                    },
                    "name": "刘海",
                    "id": "1362507"
                }],
                "year": "2016",
                "images": {
                    "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2375677172.jpg",
                    "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2375677172.jpg",
                    "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2375677172.jpg"
                },
                "alt": "https://movie.douban.com/subject/25908065/",
                "id": "25908065"
            }],
            "title": "正在上映的电影-北京"
        }
    }])
})(angular)