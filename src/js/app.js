var app = angular.module('teaApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/all-teas-main/allTeas.html'
    })
    .when('/cart', {
      templateUrl: 'components/cart-main/cart.html'
    })
    .when('/about', {
      templateUrl: 'partials/about.html'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .otherwise('/');
})




