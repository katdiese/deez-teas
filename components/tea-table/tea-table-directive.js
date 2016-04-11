app.directive('parentDiv', function(teaService) {
  return {
    restrict: 'E',
    templateUrl: 'components/tea-table/parent-div.html',
    controller:
      function($scope, teaService) {
      $scope.message = "I am the teas controller!";
      $scope.sortPrice = "price"
      this.getTeas = teaService.getTeas();
      console.log(this.getTeas);
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
  templateUrl:'components/tea-table/cart-button.html'
  }
});
app.directive('teaList', function() {
  return {
    require: '^parentDiv',
    restrict: 'E',
    templateUrl: 'components/tea-table/tea-list.html',
    link: function($scope, elem, attrs, controllerInstance) {
     $scope.getTeas = controllerInstance.getTeas;
    }
  }
});