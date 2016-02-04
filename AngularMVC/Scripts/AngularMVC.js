var AngularMVC = angular.module('AngularMVC', ['ngRoute']);

AngularMVC.controller('LandingPageController', LandingPageController);
AngularMVC.controller('LoginController', LoginController);
AngularMVC.controller('RegisterController', RegisterController);

AngularMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularMVC.config(configFunction);