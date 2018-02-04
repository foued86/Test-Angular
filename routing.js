'use strict';

app.config(
    function($routeProvider){
        $routeProvider
            .when('/', {
                controller : 'index',
                templateUrl : 'views/index/index.html'
            })
            .when('/user/create', {
                controller : 'createUserController',
                templateUrl : 'views/index/createUser.html'
            })
            .when('/home', {
                controller : 'index',
                templateUrl : 'views/index/home.html'
            })
            .when('/items', {
                controller : 'itemList',
                templateUrl : 'views/items/list.html'
            })
            .when('/items/new', {
                controller : 'itemCreate',
                templateUrl : 'views/items/create.html'
            })
            .when('/items/edit', {
                controller : 'itemEdit',
                templateUrl : 'views/items/create.html'
            })
            .when('/categories', {
                controller : 'categoryList',
                templateUrl : 'views/categories/list.html'
            })
            .when('/categories/new', {
                controller : 'categoryCreate',
                templateUrl : 'views/categories/create.html'
            })
            .when('/categories/edit', {
                controller : 'categoryEdit',
                templateUrl : 'views/categories/create.html'
            })
            
    }
);
