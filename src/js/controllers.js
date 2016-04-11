app.controller('teasController', ['$scope', 'teaService', function($scope, teaService) {
  $scope.message = "I am the teas controller!";
  $scope.sortPrice = "price"
  $scope.getTeas = teaService.getTeas();
  $scope.quantity = 1;
  $scope.addToCart = function(item, quantity) {
    teaService.addToCart(item, quantity);
  }
}]);

app.controller('cartController', ['$scope', 'teaService', function($scope, teaService) {
  $scope.message = "I am the cart controller!"
}])

