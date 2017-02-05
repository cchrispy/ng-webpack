import angular from 'angular';

var app = angular.module('app', []);

app.controller('mainController', ['$scope', 'mainService', function($scope, mainService) {
  $scope.strings = ['first string'];
  $scope.text = 'hey';
  mainService.print('yoyoyooo dawwwg');
  $scope.foobar = 'bound to ng-model'
  $scope.clicked = text => {
    $scope.strings.push(text);
    console.log($scope.strings);
  }
}]);

app.service('mainService', function() {
  this.print = (x) => {
    console.log(x);
  }
});