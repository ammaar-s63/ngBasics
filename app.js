var myApp = angular.module('myApp', ['ngMessages', 'ngResources']);

myApp.controller('mainController', function($scope, $log, $filter) {

  $scope.name = "rana ali ammaar";
  $scope.formattedName = $filter("uppercase")($scope.name);

  $log.error($scope.formattedName);

});
