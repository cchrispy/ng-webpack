import angular from 'angular';

var app = angular.module('app', []);

app.controller('mainController', ($scope) => {
  $scope.text = 'hey';
})