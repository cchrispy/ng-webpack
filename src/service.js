import angular from 'angular';

var app = angular.module('app');

app.service('secondService', function() {
  this.random = function() {
    return Math.random();
  }
  this.value = 420;
})

app.service('philzCoffee', function() {
  this.random = Math.random();
})