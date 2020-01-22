var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.name = 'Ammaar'
  $timeout(function () {

  $scope.name = 'World'

}, 3000);
}]);
