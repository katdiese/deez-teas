app.directive('cartTotal', function() {
  return {
    require: '^cartParent',
    restrict: 'E',
    templateUrl: 'components/cart-total/cart-total.html'
  }
})