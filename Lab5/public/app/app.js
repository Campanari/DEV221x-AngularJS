angular
    .module('app', ['ngRoute'])
    .config([
        '$routeProvider',
        '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider
            .when('/items/', {
                templateUrl: '/app/items/index.html',
                controller: 'ItemsController',
                controllerAs: 'vm'
            })
            .when('/contactus/', {
                templateUrl: '/app/contactus/index.html',
                controller: 'ContactUsController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: 'app/home/index.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            })
        }
    ]);