var app = angular.module('app', ['ngRoute', 'appServices','ng-currency',]);

app.config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(false);

    $routeProvider
        .when('/previsul/', {
            disableCache: true,
            templateUrl: function (params) {
                return 'views/login.html?' + $.now();
            },
            controller: 'login.controller',
        })
        .when('/previsul/home', {
            disableCache: true,
            templateUrl: function (params) {
                return 'views/home.html?' + $.now();
            },
            controller: 'home.controller',
        })
        .when('/previsul/adesao', {
            disableCache: true,
            templateUrl: function (params) {
                return 'views/adesao.html?' + $.now();
            },
            controller: 'adesao.controller',
        })
        .when('/previsul/relatorios', {
            disableCache: true,
            templateUrl: function (params) {
                return 'views/relatorios.html?' + $.now();
            },
            controller: 'relatorios.controller',
        })
        .otherwise({ redirectTo: '/previsul/' });
});