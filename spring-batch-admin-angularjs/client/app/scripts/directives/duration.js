'use strict';

/**
 * @ngdoc function
 * @name clientApp.directive:duration
 * @description
 * # duration
 * Duration calculations
 */
angular.module('batchAdmin')
  .directive('duration', [function() {

  var linkFunction = function(scope, el) {
    var startDateTime;
    var endDateTime;
    var element;

    function updateDuration() {
      if (startDateTime && endDateTime) {
        var duration = moment.duration(endDateTime - startDateTime);
        element.html(duration.asMilliseconds() + ' ms');
      }
    }
    element = el;
    scope.$watch('start', function(value){
      if (value) {
        startDateTime = moment(value);
        updateDuration();
      }
    });
    scope.$watch('end', function(value){
      if (value) {
        endDateTime = moment(value);
        updateDuration();
      }
    });

  };
  return {
    restrict: 'A',
    scope: {
      duration: '=',
      start: '=',
      end: '='
    },
    link: linkFunction,
  };
}]);
