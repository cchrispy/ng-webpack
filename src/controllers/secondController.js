import angular from 'angular';

var app = angular.module('app');

app.controller('secondController', ['$scope', 'secondService', function($scope, secondService) {

  $scope.secondaryText = 'this is in secondController'

  $scope.moreText = secondService.random();

  $scope.testingtesting = "\nTESTING \nTESTING TESTING\n"

}])