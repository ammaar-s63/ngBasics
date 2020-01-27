var myApp = angular.module('myApp', ['ngResource']);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  $scope.name = '';
  $scope.lowercaseName = function() {
    return $filter('lowercase')($scope.name)
  };

  $scope.characters = 5;

  $http.get('http://localhost:3000/rules.json')
    .success(function (result) {

      $scope.rules = result;

    })

    .error(function (data, status) {

      console.log(data);

    })

  $scope.newRule = '';

  $scope.addRule = function () {
    $http.post('http://localhost:3000/rules', { name: $scope.newRule } )
      .success(function (result) {

        $scope.rules = result;
        $scope.newRule = '';

      })

      .error(function (data, status) {

        console.log(data);

      })
  }

}]);
