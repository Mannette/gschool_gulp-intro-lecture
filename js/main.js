var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope) {
  $scope.greeting = 'Hello World';
}]);
