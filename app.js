var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.name = "";
  $scope.lowercaseName = function() {
    return $filter('lowercase')($scope.name)
  };

  $scope.characters = 5;

  $scope.rules = [
    { rulename: "Must be characters only." },
    { rulename: "Must be Unique."},
    { rulename: "Must be awesome!"}
  ]

}]);
