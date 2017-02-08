import angular from 'angular';

var app = angular.module('app');

app.directive('customDirective', function() {
  return {
    template: `
      <div>
        I am in the directive!
        {{ strings }}
      </div>
    `
  }
})


