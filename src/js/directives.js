app.directive('kngHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/kng-header.html'
  }
});
app.directive('searchBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/search-bar.html'
  }
})
app.directive('parentDiv', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/parent-div.html',
    controller:
      function($scope, teaService) {
      $scope.message = "I am the teas controller!";
      $scope.sortPrice = "price"
      $scope.getTeas = teaService.getTeas();
      $scope.quantity = 1;
      $scope.addToCart = function(item, quantity) {
        teaService.addToCart(item, quantity);
      }
      $scope.itemsInCart = function() {
        return teaService.getCart().length;
      }
    }
  }
});
app.directive('cartButton', function() {
  return {
  require:'^parentDiv',
  restrict: 'E',
  templateUrl:'partials/cart-button.html'
  }
})