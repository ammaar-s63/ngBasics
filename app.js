var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.alertClick  = function(){
    alert("Button Clicked !");
  };

  $scope.name = "Rana Ali"

}]);
