var app = angular.module('teaApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/allTeas.html',
      controller: 'teasController'
    })
    .when('/cart', {
      templateUrl: 'partials/cart.html',
      controller: 'cartController'
    })
    .otherwise('/');
})




