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




// Using templateUrl for files not served from a server will
// yield a cross-origin error.
// To overcome this, we use ES6 template literals
// to create the template in a javascript file rather than html
import template_1 from './templates/template_1';

app.directive('secondDirective', function() {
  return {
    template: template_1,
    scope: { // isolated scope, so this directive isn't directly bound to a parent's scope variable
      strings: '=line'
    }
  }
})