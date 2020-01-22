var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
  console.log($resource);

  var arr = [1,
            '2',
            function() { alert('Hello World!.') }
    ]
  arr[2]();
});
