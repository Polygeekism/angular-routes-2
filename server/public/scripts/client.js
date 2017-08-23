console.log('client has been sourced');
var app = angular.module('HeroesApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: '/views/heroes.html',
        controller: 'PowersController',
        controllerAs: 'vm'
    }).when('/powers',{
        templateUrl: '/views/powers.html',
        controller: 'PowersController',
        controllerAs: 'vm'
    })
}]);

