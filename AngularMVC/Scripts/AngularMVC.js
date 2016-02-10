var AngularMVC = angular.module('AngularMVC', ['ngRoute']);

AngularMVC.controller('LandingPageController', LandingPageController);
AngularMVC.controller('LoginController', LoginController);
AngularMVC.controller('RegisterController', RegisterController);

AngularMVC.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularMVC.factory('LoginFactory', LoginFactory);
AngularMVC.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});

    $locationProvider.hashPrefix('!').html5Mode(true);

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
            controller: RegisterController,
            controllerAs: 'register'
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

AngularMVC.config(configFunction);