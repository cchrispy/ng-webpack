import angular from 'angular';

var app = angular.module('app', []);

app.controller('mainController', ['$scope', 'mainService', function($scope, mainService) {
  $scope.text = 'hey';
  mainService.print();
}]);

app.service('mainService', function() {
  this.print = () => {
    console.log('i am in the service mainService!!!!');
  }
})