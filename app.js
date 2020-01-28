var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', function($scope) {

  $scope.name = 'Main Controller';

}]);

myApp.controller('secondController', ['$scope', function($scope) {

  $scope.name = 'Second Controller';

}]);
