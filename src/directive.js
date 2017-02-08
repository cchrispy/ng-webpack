import angular from 'angular';

angular.module('app').directive('customDirective', function() {
  return {
    template: `
      <div>
        I am in the directive!
        {{ strings }}
      </div>
    `
  }
})