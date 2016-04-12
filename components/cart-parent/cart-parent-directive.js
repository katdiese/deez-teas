app.directive('cartParent', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/cart-parent/cart-parent.html',
    controller:
      function($scope, teaService) {
        $scope.message = "I am the cart controller!";
        $scope.getCart = teaService.getCart();
        $scope.totalCost = 0;
        $scope.calcTotal = function(cart) {
          cart.forEach(function(el) {
            $scope.totalCost += el.price;
          })
        }
        $scope.removeItem = function(item) {
          $scope.totalCost -= item.price;
          teaService.removeItem(item);
        }
        $scope.calcTotal($scope.getCart);
      }
  }
});