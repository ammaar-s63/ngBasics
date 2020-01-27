var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

  $scope.name = "";
  $scope.lowercaseName = function() {
    return $filter('lowercase')($scope.name)
  };

  $scope.characters = 5;

 let rulesrequest = new XMLHttpRequest();
 rulesrequest.onreadystatechange = function () {
  $scope.$apply(function () {
    if (rulesrequest.readyState == 4 && rulesrequest.status == 200 )
      $scope.rules = JSON.parse(rulesrequest.responseText)
  });
 }

 rulesrequest.open("GET", "http://localhost:3000/rules.json", true);
 rulesrequest.send();


}]);
