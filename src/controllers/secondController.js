import angular from 'angular';

var app = angular.module('app');

app.controller('secondController', ['$scope', function($scope) {

  $scope.secondaryText = 'this is in secondController'

}])