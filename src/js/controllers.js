// app.controller('teasController', ['$scope', 'teaService', function($scope, teaService) {
//   $scope.message = "I am the teas controller!";
//   $scope.sortPrice = "price"
//   $scope.getTeas = teaService.getTeas();
//   $scope.quantity = 1;
//   $scope.addToCart = function(item, quantity) {
//     teaService.addToCart(item, quantity);
//   }
//   $scope.itemsInCart = function() {
//     return teaService.getCart().length;
//   }
// }]);

app.controller('cartController', ['$scope', 'teaService', function($scope, teaService) {
  $scope.message = "I am the cart controller!";
  $scope.getCart = teaService.getCart();
  $scope.totalCost = 0;
  $scope.calcTotal = function(cart) {
    cart.map(function(el) {
      $scope.totalCost += el.price;
    })
  }
  $scope.removeItem = function(item) {
    $scope.totalCost -= item.price;
    teaService.removeItem(item);
  }
  $scope.calcTotal($scope.getCart);
}])

