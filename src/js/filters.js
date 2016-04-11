app.filter('realCurrency', function() {
  return function(input) {
    return input * .01;
  }
})