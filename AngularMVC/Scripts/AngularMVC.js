//create app module
var AngularMVC = angular.module('AngularMVC', ['ngRoute']);

//initialize controller
AngularMVC.controller('LandingPageController', LandingPageController);

//configure routes for app
var configFunction = function ($routeProvider) {
    $routeProvider
        .when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
};

//inject routeProvider into configFunction so it may be used (Dep Injection)
configFunction.$inject = ['$routeProvider'];

//Apply configuration to angular app
AngularMVC.config(configFunction);
