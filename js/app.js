var app = angular.module('teaApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      template: '<search-bar></search-bar><parent-div></parent-div>'
    })
    .when('/cart', {
      template: '<cart-parent></cart-parent>'
    })
    .when('/about', {
      templateUrl: 'partials/about.html'
    })
    .when('/contact', {
      templateUrl: 'partials/contact.html'
    })
    .otherwise('/');

    $locationProvider.html5Mode(true);
});




