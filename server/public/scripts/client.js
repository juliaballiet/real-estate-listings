let realEstateApp = angular.module('realEstateApp', ['ngRoute']);

realEstateApp.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as sc'
    }).when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController as rc'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
})