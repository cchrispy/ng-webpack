import angular from 'angular';

var app = angular.module('app');

app.controller('mainController', ['$scope', 'mainService', 'secondService', 'philzCoffee', function($scope, mainService, secondService, philzCoffee) {
  $scope.strings = ['first string'];
  $scope.text = 'hey';
  mainService.print('yoyoyooo');
  $scope.foobar = 'bound to ng-model'
  $scope.clicked = text => {
    $scope.strings.push(text);
    console.log($scope.strings);
  }
  $scope.rando = secondService.random();
  $scope.rando_2 = philzCoffee.random;
  $scope.sup = 'SUPADOODLE';
}]);

app.service('mainService', function() {
  this.print = (x) => {
    console.log(x);
  }
});