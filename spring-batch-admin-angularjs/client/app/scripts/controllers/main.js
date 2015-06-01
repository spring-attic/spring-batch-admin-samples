'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('batchAdmin')
  .controller('MainCtrl', ['$state', '$scope', function ($state, $scope) {
    $scope.somethingInteresting = 'yomamma';
    console.log($state.current);
    //$scope.awesomeThings = [
      //'HTML5 Boilerplate',
      //'AngularJS',
      //'Karma'
    //];

  }]);
