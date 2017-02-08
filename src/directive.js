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

import template_1 from './templates/template_1';

app.directive('secondDirective', function() {
  return {
    template: template_1
  }
})