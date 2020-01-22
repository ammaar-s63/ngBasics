var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
  $scope.name = "";

  $scope.lowercaseName = function() {

    return $filter('lowercase')($scope.name)

  };

$scope.$watch('name', function(newValue, oldValue) {

    console.info('Changed!');
    console.log('Old:' + oldValue);
    console.log('New:' + newValue);

  });

  setTimeout(function() {
    $scope.$apply(function() {
      $scope.name = "Ali Ammaar"
      console.log('Scope Changed!')
    });
  }, 3000);

}]);
