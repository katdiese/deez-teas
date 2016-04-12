app.directive('cartTable', function() {
  return {
    require: '^cartParent',
    restrict: 'E',
    templateUrl: 'components/cart-table/cart-table.html'
  }
})