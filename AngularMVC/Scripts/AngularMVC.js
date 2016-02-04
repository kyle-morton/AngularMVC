//create app module
var AngularMVC = angular.module('AngularMVC', ['ngRoute']);

//initialize controller
AngularMVC.controller('LandingPageController', LandingPageController);

//configure routes for app (retrieve views, etc from backend routes)
var configFunction = function ($routeProvider) {
    $routeProvider
        .when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            //templateUrl: 'routesDemo/two'
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts;}
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
};

//inject routeProvider into configFunction so it may be used (Dep Injection)
configFunction.$inject = ['$routeProvider'];

//Apply configuration to angular app
AngularMVC.config(configFunction);
