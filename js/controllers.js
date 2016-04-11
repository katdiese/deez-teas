app.controller('teasController', ['$scope', 'teaService', function($scope, teaService) {
  $scope.message = "I am the teas controller!";
  $scope.sortPrice = "price"
  $scope.getTeas = teaService.getTeas();
}]);

app.controller('cartController', ['$scope', 'teaService', function($scope, teaService) {
  $scope.message = "I am the cart controller!"
}])

